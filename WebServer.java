import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

/**
 * Servidor Web Local en Java para la Sustentación de Grado de MUMA
 * Universidad CESMAG - San Juan de Pasto
 * 
 * Para compilar y ejecutar:
 *   javac WebServer.java
 *   java WebServer
 * Luego abre en tu navegador: http://localhost:8080
 */
public class WebServer {
    private static final int PORT = 8080;

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null); // crea un ejecutor por defecto
        System.out.println("==================================================================");
        System.out.println("  SERVIDOR WEB MUMA - SUSTENTACIÓN DE GRADO DE DERECHO (CESMAG)   ");
        System.out.println("==================================================================");
        System.out.println("  Servidor iniciado con éxito.");
        System.out.println("  Abre en tu navegador: http://localhost:" + PORT);
        System.out.println("  Presiona Ctrl + C en esta terminal para detener el servidor.");
        System.out.println("==================================================================");
        server.start();
    }

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String uriPath = exchange.getRequestURI().getPath();
            if (uriPath == null || uriPath.equals("/") || uriPath.isEmpty()) {
                uriPath = "/index.html";
            }

            // Ruta física en el disco
            File baseDir = new File(".");
            File requestedFile = new File(baseDir, uriPath.replace('/', File.separatorChar)).getCanonicalFile();

            // Seguridad básica para no salir del directorio actual
            if (!requestedFile.getPath().startsWith(baseDir.getCanonicalPath())) {
                sendResponse(exchange, 403, "403 Prohibido", "text/plain; charset=utf-8");
                return;
            }

            if (!requestedFile.exists() || requestedFile.isDirectory()) {
                sendResponse(exchange, 404, "404 No encontrado", "text/plain; charset=utf-8");
                return;
            }

            String contentType = getMimeType(requestedFile.getName());
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");

            long fileLength = requestedFile.length();
            exchange.sendResponseHeaders(200, fileLength);

            try (FileInputStream fis = new FileInputStream(requestedFile);
                 OutputStream os = exchange.getResponseBody()) {
                byte[] buffer = new byte[8192];
                int count;
                while ((count = fis.read(buffer)) > 0) {
                    os.write(buffer, 0, count);
                }
                os.flush();
            }
        }

        private void sendResponse(HttpExchange exchange, int statusCode, String message, String contentType) throws IOException {
            byte[] bytes = message.getBytes("UTF-8");
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(statusCode, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
                os.flush();
            }
        }

        private String getMimeType(String fileName) {
            String lower = fileName.toLowerCase();
            if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html; charset=utf-8";
            if (lower.endsWith(".css")) return "text/css; charset=utf-8";
            if (lower.endsWith(".js")) return "application/javascript; charset=utf-8";
            if (lower.endsWith(".json")) return "application/json; charset=utf-8";
            if (lower.endsWith(".svg")) return "image/svg+xml";
            if (lower.endsWith(".png")) return "image/png";
            if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
            if (lower.endsWith(".mp4")) return "video/mp4";
            if (lower.endsWith(".webm")) return "video/webm";
            if (lower.endsWith(".pdf")) return "application/pdf";
            return "application/octet-stream";
        }
    }
}
