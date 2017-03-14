import java.net.*;
import java.io.*;

public class MainClass {
	public static void main(String[] args) throws UnknownHostException, IOException {
		System.out.println("Welcome to our server.");
		
		try {
			ServerSocket serverSocket = new ServerSocket(9876);
			Socket socket = serverSocket.accept();
			
			
			BufferedReader socket_reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			DataOutputStream writer = new DataOutputStream(socket.getOutputStream());
			
			
			while(true){
				String str = socket_reader.readLine();
				System.out.println(str);
				str = reader.readLine();
				writer.writeBytes(str + "\r\n");
				if(str.equalsIgnoreCase("quit"))
				break;
			}
			socket.close();
			serverSocket.close();
		}
		
		catch(Exception e){e.getStackTrace();}
		
	}
}
