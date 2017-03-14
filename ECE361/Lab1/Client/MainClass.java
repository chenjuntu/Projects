import java.net.*;
import java.io.*;
public class MainClass {
	public static void main(String[] args) throws UnknownHostException, IOException {
		System.out.println("Hello World");
		try{
			
			Socket socket = new Socket("localhost",9876);
			BufferedReader socket_reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			DataOutputStream writer = new DataOutputStream(socket.getOutputStream());
			
			while(true){
				long start = System.currentTimeMillis();
				String str = reader.readLine();
				writer.writeBytes(str + "\r\n");
				str = socket_reader.readLine();
				System.out.println(str);
				long end = System.currentTimeMillis();
				System.out.println(end - start);
				if(str.equalsIgnoreCase("quit"))
					break;
			}
			socket.close();
		}catch(Exception e){e.getStackTrace();}
	}
}
