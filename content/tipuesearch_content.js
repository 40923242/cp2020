var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n Next \xa0 >> 作業進度 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '作業進度', 'text': '\n \n \n week \n 目標 \n 完成進度 \n \n \n W1: \n 建立倉儲 \n 100% \n \n \n W2: \n 建立網頁 \n 100% \n \n \n W4: \n PC Hardware帳號建立 \n 100% \n \n \n W5: \n 完成英翻中文放到網頁上 \n PCH14:30% \n \n \n W6: \n \n \n \n \n \n', 'tags': '', 'url': '作業進度.html'}, {'title': 'W1作業', 'text': '', 'tags': '', 'url': 'W1作業.html'}, {'title': 'PCH 14 TCP and UDP Protocols', 'text': '', 'tags': '', 'url': 'PCH 14 TCP and UDP Protocols.html'}, {'title': 'P105 Overview', 'text': 'In this lesson, we will discuss transmission control protocol (TCP) and user datagram protocol (UDP), as well as their associated ports and protocols. We will specifically address the various email ports and protocols in use today, as well as discussing secure sockets layer/transport layer security (SSL/TLS) in the context of web security. Then, we will discuss file transfer protocol (FTP) and hypertext transfer protocol (HTTP) and their use on the Internet today, as well as some older technologies such as Telnet and its more secure alternative, secure shell (SSH). \n 在本課程中，我們將討論傳輸控制協議（TCP）和用戶數據報協議（UDP）以及它們相關的端口和協議。 我們將專門解決當今使用的各種電子郵件端口和協議，並在Web安全的背景下討論安全套接字層/傳輸層安全（SSL / TLS）。 然後，我們將討論文件傳輸協議（FTP）和超文本傳輸協議（HTTP）及其在當今Internet上的使用，以及一些較老的技術，例如Telnet及其更安全的替代方法，安全外殼（SSH）。 \n', 'tags': '', 'url': 'P105 Overview.html'}, {'title': 'P106\xa0TCP and UDP', 'text': 'TCP is a connection-oriented protocol that ensures the reliable transport of data segments from one device to another. During transmission, if a segment is dropped, it will be detected and resent or retransmitted by the originator device. Each communication is acknowledged upon receipt, providing a secure model to ensure successful communications. This type of transmission is great for all network data types, especially those that need delivery to be assured. \n When a TCP communication is initiated, the originator and receiver perform a “three-way handshake” before starting the data transmission. In the first step, the originator sends a packet with a synchronization (SYN) flag set. Next, the receiver acknowledges receipt of this SYN flagged packet by sending back a synchronization-acknowledged (SYN-ACK) flagged packet. Finally, the originator sends an acknowledgement of the synchronization-acknowledged flagged packet, and then data transmission occurs. \n TCP是一種面向連接的協議，可確保將數據段從一台設備可靠地傳輸到另一台設備。在傳輸過程中，如果某個段丟失，則發起方設備將檢測到該段並將其重新發送或重新發送。每次通信在收到後都會得到確認，從而提供一個安全的模型來確保成功進行通信。這種傳輸方式適用於所有網絡數據類型，尤其是那些需要確保傳輸的數據類型。 \n 當啟動TCP通信時，發起方和接收方在開始數據傳輸之前執行“三向握手”。 第一步，發起方發送一個設置了同步（SYN）標誌的數據包。 接下來，接收器通過發回一個同步確認（SYN-ACK）標記數據包來確認此SYN標記數據包的接收。 最後，始發者發送對已同步確認的標記數據包的確認，然後發生數據傳輸。 \n Example \n Think of this like two students who want to discuss an important project that is upcoming. The first student, Bob, says to Jane, “Jane, I want to talk to you.” Next, Jane says, “Bob, I acknowledge that you want to talk to me and I am ready to listen.” Finally, Bob tells her, “Jane, I understand you are ready to listen. Let’s talk.” At this point, the two students can talk, knowing they are both ready to listen to each other. \n 就像兩個想討論即將開展的重要項目的學生一樣。 第一位學生 Bob 對Jane說：“Jane，我想和你說話。” 接下來， Jane 說：“ Bob ，我承認你想和我說話，我已經準備好傾聽。” 最後，Bob告訴她：“ Jane ，我知道你已經準備好聽了。 讓我們談談。” 此時，兩個學生可以交談，知道他們倆都準備好了互相傾聽。 \n \n UDP, or user datagram protocol, was developed as a connectionless protocol in order to increase the speed of the network over TCP transmissions. Because of the three-way handshake in TCP, as well as all the delivery assurance and quality control, TCP has a good amount of network overhead that slows down its communications. Network engineers realized that sometimes you don’t need delivery assurance or quality control. So UDP was established. \n UDP is considered unreliable, because if a segment is dropped during transmission, the sending device doesn’t know and doesn’t care. There is no retransmission. Once data is sent, it is gone. This is good, though, for audio and video streaming. In these applications, the data transferred is enormously large, and if a single segment is dropped it doesn’t affect the overall quality of the audio or video sent. \n UDP（或用戶數據報協議）被開發為無連接協議，目的是通過TCP傳輸提高網絡速度。 由於TCP中的三向握手以及所有的交付保證和質量控制，TCP具有大量的網絡開銷，從而降低了其通信速度。 網絡工程師意識到有時您不需要交付保證或質量控制。 這樣就建立了UDP。 \n UDP被認為是不可靠的，因為如果在傳輸過程中丟棄了網段，則發送設備將不知道也不在乎。 沒有重傳。 數據一旦發送，就消失了。 但是，這對於音頻和視頻流來說是很好的。 在這些應用中，傳輸的數據非常大，如果丟棄單個片段，則不會影響所發送的音頻或視頻的整體質量。 \n Example \n I like to think of UDP as my college calculus teacher. He started at one side of the board at 8 a.m., and by 9 a.m. he was done at the other side of the board. He never asked if the students understood what he said or wrote, he just kept transmitting. This is a great example of UDP. \n 我喜歡將UDP視為我的大學微積分老師。 他在上午8點從董事會的一側開始，到上午9點，他在董事會的另一側完成了工作。 他從不問學生是否理解他所說或寫的內容，他只是不斷地傳播。 這是UDP的一個很好的例子。 \n \n TCP Vs. UDP \n TCP and UDP have many differences. TCP is reliable, but UDP is unreliable. TCP focuses on connection-oriented communications using the three-way handshake, while UDP is connectionless. TCP uses windowing, discussed in more detail later, to control the amount of data sent at a given time based on changing network speeds, but UDP simply transmits everything once with no windowing. TCP also supports segment sequencing; UDP just hopes it gets to the destination in the right order. Finally, TCP waits for acknowledgements, but UDP just hopes it got there. To simplify it, TCP is an assured and reliable communication method, UDP is just a best-effort model. \n TCP和UDP有很多區別。 TCP是可靠的，但UDP是不可靠的。 TCP專注於使用三向握手的面向連接的通信，而UDP是無連接的。 TCP使用加窗（稍後將詳細討論）來基於不斷變化的網絡速度來控制在給定時間發送的數據量，但是UDP僅傳輸所有信息一次而沒有加窗。 TCP還支持段排序； UDP只是希望它以正確的順序到達目的地。 最後，TCP等待確認，但是UDP只是希望它到達目的地。 為簡化起見，TCP是一種有保證且可靠的通信方法，UDP只是一種盡力而為的模型。 \n TCP Windowing \n TCP also supports a concept called windowing. If you have ever copied a file from a network share drive on the Windows operating system, you have seen windowing. Have you ever noticed when you copy a file over the network, it may start out saying there are “2 minutes remaining” until completion, then it jumps up to “3 hours remaining,” then back down to “30 minutes remaining”? This is TCP windowing in action. \n Essentially, when a communication session is established with TCP, it first performs the three-way handshake. Next, it starts with a small window size, like windows size 1 in the image below, where a single segment is sent over the network and acknowledged. If this is successful, it increases the window size to 2, sending two segments at a time. It continues to do this, increasing the number of segments each time, transmitting more data in each window until an error occurs and retransmissions must be done. If errors occur, TCP understands that it must have been transmitting too fast, so it shrinks the window to slow down communication. As transmissions occur successfully, it again increases the window to push more data in each window. This window size is continually adjusted to get the most segments per window with the least errors in communication. \n TCP還支持稱為窗口化的概念。如果您曾經從Windows操作系統上的網絡共享驅動器中復製過文件，則會看到窗口。您是否曾經註意到通過網絡複製文件時，它可能會說“剩餘2分鐘”直到完成，然後跳到“剩餘3小時”，然後又跳回到“剩餘30分鐘”？這是TCP窗口在起作用。 \n 本質上，當使用TCP建立通信會話時，它首先執行三向握手。接下來，它以較小的窗口大小開始，如下面的圖片中的窗口大小1所示，其中單個段通過網絡發送並確認。如果成功，它將窗口大小增加到2，一次發送兩個段。它繼續執行此操作，每次增加段數，在每個窗口中傳輸更多數據，直到發生錯誤並必須重新傳輸為止。如果發生錯誤，TCP知道它一定傳輸速度太快，因此它縮小了窗口以減慢通信速度。隨著傳輸成功進行，它將再次增加窗口以在每個窗口中推送更多數據。不斷調整此窗口大小，以使每個窗口獲得最多的段，並且通信錯誤最少。 \n \n', 'tags': '', 'url': 'P106\xa0TCP and UDP.html'}, {'title': 'P107 TCP IP Stack', 'text': 'Each client and server has an IP address. Clients and servers are identified on the network by their IP addresses. In addition to an IP address, each machine has numerous “ports” that we can utilize. A port is an endpoint to a logical connection. A client program specifies a particular server program on a computer in a network by identifying a port. Ports allow a single client to communicate simultaneously with multiple other devices, separating each session by using a designated port number. \n 每個客戶端和服務器都有一個IP地址。 客戶端和服務器通過其IP地址在網絡上進行標識。 除了IP地址外，每台機器都有許多我們可以利用的“端口”。 端口是邏輯連接的端點。 客戶端程序通過識別端口來指定網絡中計算機上的特定服務器程序。 端口允許單個客戶端與多個其他設備同時通信，並使用指定的端口號分隔每個會話。 \n example \n The best way to envision this is to think of an apartment building. Your building’s address may be 123 Main Street; this would be equivalent to your IP address. But how does the mailman know which door to use when delivering your package, since multiple families live at 123 Main Street? The mailman uses your apartment number, which defines which door in the building he would knock on to deliver your package. These apartment doors would be called ports in a computer, and the computer knows which programs and sessions requested information over the network by tracking the port numbers that make the requests. \n 設想此問題的最佳方法是考慮一棟公寓樓。 您的建築物的地址可能是大街123號； 這相當於您的IP地址。 但是由於多個家庭居住在Main Street 123號，郵遞員如何知道在運送包裹時要使用哪扇門？ 郵遞員使用您的公寓號碼，該號碼定義了他敲樓時要送出包裹的門。 這些公寓門在計算機中稱為端口，計算機通過跟踪發出請求的端口號來知道哪些程序和會話在網絡上請求了信息。 \n example \n Similar to an apartment building, on the network, let’s assume the client has an IP address of 10.1.1.1, which we call the source IP. The computer’s web browser chose a port number of 1248 from which to initiate the communication and a destination of 172.16.1.2 (which would be a web server for some company) and a destination port of 80 (which is the common port number for all web page traffic). The server then replies from its IP address (172.16.1.2) and port 80 to the client who made the request at their IP address of 10.1.1.1 and port 1248. As they continue the conversation, they will continue to use these IP addresses and ports, and at the same time the web server can maintain other communications with other customers, just like the client can surf to other websites in other tabs in their browser simultaneously without mixing the data, since they are separated by the port numbers. The diagram below illustrates this communication. \n 與網絡上的公寓樓類似，我們假設客戶端的IP地址為10.1.1.1，我們將其稱為源IP。 計算機的Web瀏覽器選擇了用於發起通信的端口號1248，以及目的地172.16.1.2（對於某些公司而言將是Web服務器）和目的端口80（這是所有Web站點的通用端口號）。 頁面訪問量）。 然後，服務器從其IP地址（172.16.1.2）和端口80答复給以其IP地址10.1.1.1和端口1248發出請求的客戶端。隨著他們繼續進行對話，他們將繼續使用這些IP地址和 端口，同時Web服務器可以維持與其他客戶的其他通信，就像客戶端可以同時瀏覽其瀏覽器其他選項卡中的其他網站而無需混合數據一樣，因為它們由端口號分隔。 下圖說明了這種通信。 \n \n Port numbers are considered either well-known or ephemeral. Well-known port numbers are between 1 and 1023, like the web browsing port number of 80 in our last example. Port 80 is reserved as a well-known port for all hypertext transfer protocol (HTTP) traffic. Ephemeral port numbers are considered “high-numbered” ports and start at 1024 and go up to 65,535. These are usually the ports used by the client making the request, as we saw in our web browsing example, above, when the client chose port 1248 as its requesting port. \n 端口號被認為是眾所周知的或短暫的。 眾所周知的端口號在1到1023之間，例如我們上一個示例中的Web瀏覽端口號80。 端口80保留為所有超文本傳輸協議（HTTP）通信的眾所周知的端口。 臨時端口號被認為是“高編號”端口，起始於1024，最高可達65,535。 這些通常是客戶端發出請求的端口，正如我們在上面的Web瀏覽示例中所見，當客戶端選擇端口1248作為其請求端口時。 \n \n', 'tags': '', 'url': 'P107 TCP IP Stack.html'}, {'title': 'P108\xa0Networking Transfer Protocols', 'text': "TCP/IP contains a suite of many different transfer protocols for routing information across networks. Each protocol uses a different well-known port to keep its traffic separate from the others. Web browsing occurs using either hypertext transfer protocol (HTTP) or hypertext transfer protocol secure (HTTPS). When it uses HTTP, it uses port 80. If, however, the client requests that the site be sent securely using encryption, then it uses the HTTPS protocol and port 443. When being sent securely, the client and server use either secure sockets layer (SSL) or transport layer security (TLS). These additional layers are put on top of the existing HTTP standard to encrypt the data connection between the client and the server. \n In addition to browsing the web, there are many other things that can be done on the network and each uses its own dedicated port number to keep the traffic separate. File transfer protocol (FTP) uses port 21. FTP is a standard network protocol used to transfer computer files from one host to another host over a TCP-based network, such as the Internet. FTP is built on a client-server architecture and uses separate control and data connections between the client and the server. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n TCP / IP包含一套用於在網絡之間路由信息的許多不同的傳輸協議。每種協議使用不同的眾所周知的端口，以使其流量彼此獨立。使用超文本傳輸協議（HTTP）或安全超文本傳輸協議（HTTPS）進行Web瀏覽。當使用HTTP時，它將使用端口80。但是，如果客戶端請求使用加密安全地發送站點，則它將使用HTTPS協議和端口443。在安全發送時，客戶端和服務器將使用安全套接字層（SSL）或傳輸層安全性（TLS）。這些額外的層放在現有HTTP標準之上，以加密客戶端和服務器之間的數據連接。 除了瀏覽Web之外，網絡上還有許多其他事情可以完成，並且每件事都使用自己的專用端口號來使流量分開。文件傳輸協議（FTP）使用端口21。FTP是一種標準網絡協議，用於通過基於TCP的網絡（例如Internet）將計算機文件從一台主機傳輸到另一台主機。 FTP建立在客戶端-服務器體系結構上，並在客戶端和服務器之間使用單獨的控制和數據連接。 \n \n Telnet is a text-based remote access program for computers that communicates over port 23. Telnet is a user command and an underlying TCP/IP protocol for accessing computers remotely. Through telnet, an administrator or another user can access someone else's computer remotely. Unfortunately, telnet is an unsecured protocol where all the information between the client and server is communicated in clear text, so anyone who can capture this data can read it easily. For this reason, secure shell (SSH), which uses port 22, was introduced to replace telnet. SSH is a cryptographic (encrypted) network protocol for initiating text-based shell sessions on remote machines, similar to telnet but with the added strength of encryption. The domain name system (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet or to a private network. It allows for the translation of IP addresses to domain names, and from domain names to IP addresses. Remote desktop protocol (RDP) is a proprietary protocol developed by Microsoft, which provides users with a graphical interface to connect to other computers over a network connection using port 3389. The user employs RDP client software for this purpose, while the other computer must run RDP server software. RDP is a huge step up over telnet and SSH, because you receive a graphical environment to control the other user’s machine, just as if you were sitting in front of their Windows desktop. \n Telnet是用於通過端口23進行通信的計算機的基於文本的遠程訪問程序。Telnet是用戶命令和用於遠程訪問計算機的基礎TCP / IP協議。通過telnet，管理員或其他用戶可以遠程訪問其他人的計算機。不幸的是，telnet是一種不安全的協議，其中客戶端與服務器之間的所有信息都以明文形式進行通信，因此任何可以捕獲此數據的人都可以輕鬆地讀取它。因此，引入了使用端口22的安全外殼（SSH）來代替telnet。 SSH是一種加密（加密）網絡協議，用於在遠程計算機上啟動基於文本的Shell會話，類似於telnet，但具有增強的加密強度。 域名系統（DNS）是用於計算機，服務或連接到Internet或專用網絡的任何資源的分層分佈式命名系統。它允許將IP地址轉換為域名，也可以將域名轉換為IP地址。遠程桌面協議（RDP）是Microsoft開發的專有協議，它為用戶提供圖形界面以使用端口3389通過網絡連接連接到其他計算機。用戶為此目的使用RDP客戶端軟件，而另一台計算機必須運行RDP服務器軟件。 RDP是telnet和SSH的一大進步，因為您將獲得一個圖形化的環境來控制其他用戶的計算機，就像坐在他們的Windows桌面前一樣。 \n \n Simple network management protocol (SNMP) is a popular protocol for network management. It is used for collecting information from and configuring network devices, such as servers, printers, hubs, switches, and routers, on an Internet protocol (IP) network. SNMP traffic is sent over port 161. Server message block (SMB) is a network protocol used for providing shared access to files, printers, and serial ports and miscellaneous communications between nodes on a network using port 139. The lightweight directory access protocol (LDAP) is a directory service protocol that runs over port 389. LDAP provides a mechanism used to connect to, search, and modify Internet directories. The LDAP directory service is based on a client-server model. \n \n 簡單網絡管理協議（SNMP）是用於網絡管理的流行協議。 它用於從Internet協議（IP）網絡上的服務器，打印機，集線器，交換機和路由器等網絡設備收集信息並對其進行配置。 SNMP通信通過端口161發送。 服務器消息塊（SMB）是一種網絡協議，用於提供對文件，打印機和串行端口的共享訪問以及使用端口139的網絡上節點之間的其他通信。 輕型目錄訪問協議（LDAP）是在端口389上運行的目錄服務協議。LDAP提供了一種用於連接，搜索和修改Internet目錄的機制。 LDAP目錄服務基於客戶端-服務器模型。 \n \xa0 \n Email \n \n Email has evolved a lot over the years, but still operates on three main protocols. Simple mail transfer protocol (SMTP) is an Internet standard for sending email and most outbound email is sent using SMTP. SMTP uses port 25 to send email from network devices. POP3 is the most common account type for personal email, but messages are typically deleted from the server when you check your email. Internet message access protocol (IMAP) servers let you work with email messages without downloading them to your computer first. This allows for email to be synchronized (synced) across multiple devices, including your desktop, laptop, tablet, and smartphone. IMAP uses port 143 to receive and synchronize your email. The real benefit of using IMAP, especially in today’s multiple device access world, is that it can change the read and delete state of messages across the multiple devices. For example, if I read a message on my phone, when I log into my desktop, the message will also show as having been read already. \n \n 多年來，電子郵件已經有了很大的發展，但是仍然可以在三種主要協議上運行。簡單郵件傳輸協議（SMTP）是用於發送電子郵件的Internet標準，大多數出站電子郵件都是使用SMTP發送的。 SMTP使用端口25從網絡設備發送電子郵件。 POP3是最常見的個人電子郵件帳戶類型，但是當您檢查電子郵件時，通常會將郵件從服務器中刪除。 Internet郵件訪問協議（IMAP）服務器使您可以處理電子郵件，而無需先將其下載到計算機上。這允許跨多個設備（包括台式機，筆記本電腦，平板電腦和智能手機）同步電子郵件。 IMAP使用端口143接收和同步您的電子郵件。使用IMAP的真正好處（尤其是在當今的多設備訪問世界中）是，它可以更改跨多個設備的消息的讀取和刪除狀態。例如，如果我在手機上閱讀了一條消息，則當我登錄到桌面時，該消息也將顯示為已被閱讀。 \n", 'tags': '', 'url': 'P108\xa0Networking Transfer Protocols.html'}, {'title': 'P109 FTP', 'text': '\n In the OSI (Open Systems Interconnection) model, the application layer uses protocols such as trivial file transfer protocol (TFTP), file transfer protocol (FTP), and file transfer protocol secure (FTPS using TLS/SSL) to allow users to migrate data in a client-server model. FTP concerns itself with data only and as such eliminates the overhead of extraneous information such as what HTTP allows in addition to the actual data (advertisements, banners, images, etc.). This alleviates processing and bandwidth overhead and allows the client to simply retrieve the data from the server. FTP services can be accessed using client software such as ftp.exe (provided in all Microsoft operating systems), third-party software such as Filezilla or WinSCP, and any modern/current browser. Most light-duty users outside a corporate environment will not use a client FTP (or its secure version) because web browsers can negotiate FTP as well as HTTP. Public FTP servers allow for an anonymous user name so the client can reach file directories specifically designed for public access. These network communications are passed through the presentation layer to the session layer, where sockets and sessions are created using logical port numbers as defined by TCP or UDP. TCP is stateful, connection-oriented and reliable. UDP is stateless, connectionless, and less reliable. The combination of source and destination address coupled with the logical port number creates a network socket, which establishes the session for process-to-process communication. The material in this section is used under CC-BY license from https://en.wikipedia.org/wiki/Transport_layer . \n \n 在OSI（開放系統互連）模型中，應用程序層使用諸如簡單文件傳輸協議（TFTP），文件傳輸協議（FTP）和安全文件傳輸協議（使用TLS / SSL的FTPS）之類的協議來允許用戶遷移數據在客戶端-服務器模型中。 FTP僅關注數據本身，因此消除了額外信息的開銷，例如除了實際數據（廣告，橫幅，圖像等）外，HTTP允許的信息。這減輕了處理和帶寬開銷，並使客戶端可以簡單地從服務器檢索數據。 可以使用客戶端軟件（例如ftp.exe（在所有Microsoft操作系統中提供），第三方軟件（例如Filezilla或WinSCP）以及任何現代/最新的瀏覽器）訪問FTP服務。公司環境之外的大多數輕型用戶將不會使用客戶端FTP（或其安全版本），因為Web瀏覽器可以協商FTP以及HTTP。公用FTP服務器允許使用匿名用戶名，以便客戶端可以訪問專門為公用訪問而設計的文件目錄。 這些網絡通信通過表示層傳遞到會話層，在會話層中，使用由TCP或UDP定義的邏輯端口號創建套接字和會話。 TCP是有狀態的，面向連接的且可靠的。 UDP是無狀態，無連接且可靠性較低的。源地址和目標地址以及邏輯端口號的組合創建了一個網絡套接字，該網絡套接字建立了進程間通信的會話。本節中的材料根據CC-BY許可使用 https://en.wikipedia.org/wiki/Transport_layer . \n \n Active vs. Passive \n \n Active FTP is a point-to-point connection that the client initiates and connects to the FTP server port 21 for commands and port 20 for data. That means that the server will actively initiate the connections back to the client’s listening port and will require the client to allow these connections, which the firewall blocks by default. Passive FTP allows the client to initiate the data connection on port 21, and then the FTP server moves the command and data connections to random ports on the server (with numbers higher than 1023). By initiating the connection from the client side, the burden of allowing a pass-through on the firewall resides with the FTP server administrator, who is better equipped to set a range of ports allowing connectivity. \n \n 活動FTP是客戶端發起的點對點連接，並連接到FTP服務器的21號端口（用於命令）和20號端口（用於數據）。 這意味著服務器將主動發起與客戶端偵聽端口的連接，並要求客戶端允許這些連接，防火牆默認情況下會阻止這些連接。 被動FTP允許客戶端在端口21上啟動數據連接，然後FTP服務器將命令和數據連接移至服務器上的隨機端口（數字大於1023）。 通過從客戶端啟動連接，防火牆上允許通過的負擔就由FTP服務器管理員承擔，後者可以更好地設置允許連接的端口範圍。 \n \n For more information on active vs. passive FTP, visit this website . \n 有關主動與被動FTP的更多信息，請訪問此 website . \n \n Using FTP \n \n Accessing FTP public servers using the command line is not nearly as user-friendly as using a web browser. However, both methods are viable and in use in corporate networks. 使用命令行訪問FTP公共服務器並不像使用Web瀏覽器那樣友好。 但是，這兩種方法都是可行的，並已在公司網絡中使用。 \n \n Open a web browser of choice( 打開選擇的網絡瀏覽器 ) \n Use this URL: ftp.funet.fi( 使用此URL：ftp.funet.fi ) \n Click “pubs,” then “standards,” then “RFC”( 點擊“發布”，然後點擊“標準”，然後點擊“ RFC” ) \n Search RFC 959 and access either the .txt or .pdf file (left-click)( 搜索RFC 959並訪問.txt或.pdf文件（單擊鼠標左鍵） ) \n Search RFC 4217 and access either the .txt or .pdf file (left-click)( 搜索RFC 4217並訪問.txt或.pdf文件（單擊鼠標左鍵） ) \n If you actually needed the file you can right-click and save as.( 如果您確實需要該文件，則可以右鍵單擊並另存為。 ) \n \n \n \n \n Now that you see the file structure, notice it is similar to navigating a local hard drive with the only difference being that you use the “/” (forward slash) instead of the “\\” (backslash) because you are accessing the folders through the Internet. Note: In this next step using the command-line interface, you will only be able to navigate the FTP server, and will not be able to transfer files, because ftp.exe does not support passive mode by default. You can use a command-line tool in a Linux Distro; or, in Windows, you can go to Passive-FTP.com and download the freeware. However, you can create a workaround by first allowing FTP through your firewall (be sure to put firewall restrictions back in place after the exercise), and then issuing the following commands after you enter the password: \n \n 現在您已經看到文件結構，請注意，它類似於瀏覽本地硬盤驅動器，唯一的區別是您使用“ /”（正斜杠）而不是“ \\”（反斜杠），因為您通過以下方式訪問文件夾 互聯網。 注意：在接下來的使用命令行界面的步驟中，您將只能瀏覽FTP服務器，並且將無法傳輸文件，因為ftp.exe默認情況下不支持被動模式。 您可以在Linux Distro中使用命令行工具。 或者，在Windows中，您可以轉到Passive-FTP.com並下載免費軟件。 但是，您可以通過以下方法來創建變通辦法：首先允許FTP通過防火牆（請確保在練習後將防火牆限制放回原處），然後在輸入密碼後發出以下命令 \n \n quote pasv \n \n \n \n Now the “dir, ls” (list directory contents), and “get” (download) commands will work. \n \n \xa0 \xa0 \xa0 \xa0 \xa0現在，“ dir，ls”（列出目錄內容）和“ get”（下載）命令將起作用。 \n \n By default, the file will download to your user root at C:\\Windows\\Users\\**your user name** or at the root of C:\\ (wherever your OS is installed). \n \n \xa0 \xa0 \xa0 \xa0 \xa0默認情況下，該文件將下載到您的用戶根目錄，即C：\\ Windows \\ Users \\ **您的用戶名**或\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0C：\\的根目錄（無論您安裝了OS的位置）。 \n As a public FTP server set to passive mode, certain commands do not work and invoke the server to close the socket. If that happens, re-do your log on. \n Use the keyboard command + r and type ftp (from an administrative command line interface you can also type ftp). The prompt changes to ftp> \n 將公共FTP服務器設置為被動模式後，某些命令將不起作用，並調用服務器以關閉套接字。 如果發生這種情況，請重新登錄。 \n 使用鍵盤命令+ r並鍵入ftp（在管理命令行界面中，您也可以鍵入ftp）。 提示符更改為ftp> \n \n \n Type “help” and look at the commands.(輸入“ help”並查看命令。) \n Type at the command prompt: open ftp.funet.fi.(在命令提示符下鍵入：打開ftp.funet.fi。) \n Follow the prompts to log on.(按照提示進行登錄。) \n Username: anonymous.(用戶名：匿名。) \n Password: any generic e-mail (such as user@user.com).(密碼：任何通用電子郵件（例如user@user.com）。) \n \n You get a welcome message and can now navigate through the directory structure you saw in the browser by typing the following commands: \n 您會收到一條歡迎消息，現在可以通過鍵入以下命令來瀏覽瀏覽器中看到的目錄結構： \n \n pwd — lists the current directory.(pwd-列出當前目錄。) \n \n \n \n cd — changes the directory. This may be in the form of: \n \n \xa0 \xa0 \xa0 \xa0 \xa0cd —更改目錄。 可以採用以下形式： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd pub (refer to the URL path from the previous exercise), or \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd/pub/standards/RFC/ \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd pub（請參閱上一練習中的URL路徑），或 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd / pub / standards / RFC / Now if you are using the workaround, Mac, or Linux you can download a file using the “get” command:現在，如果您使用的是變通方法，Mac或Linux，則可以使用“ get”命令下載文件： Without the passive mode workaround, a third-party FTP client, Mac, or Linux this is as far as you can go. However, in the corporate environment you might be required to troubleshoot FTP on the local intranet, which would most likely be set to active FTP. Clearly, the need for command-line FTP service is fairly limited compared to using a browser.如果沒有被動模式解決方法，則只能使用第三方FTP客戶端，Mac或Linux。 但是，在公司環境中，可能需要對本地Intranet上的FTP進行故障排除，這很可能會設置為活動FTP。 顯然，與使用瀏覽器相比，命令行FTP服務的需求非常有限。 \n', 'tags': '', 'url': 'P109 FTP.html'}, {'title': 'P110 SSL', 'text': 'Secure sockets layer (SSL) is a cryptographic protocol designed to secure network communications at the application layer. Netscape developed the original protocol in 1995 and SSL became deprecated and was replaced by transport layer security (TLS) in 2015. For more information about SSL, visit this website. \n The most common place to see TLS/SSL in action is in your web browser. For example, most all web sites now default from http (port 80) to https (port 443) with TLS. It is a client-server model where the client initiates the request to connect and the server offers the secure protocol. \n 安全套接字層（SSL）是一種加密協議，旨在保護應用程序層的網絡通信安全。 Netscape在1995年開發了原始協議，並且不贊成使用SSL，並在2015年由傳輸層安全性（TLS）代替。有關SSL的更多信息，請訪問此網站。 \n 實際使用TLS / SSL的最常見地方是您的Web瀏覽器。 例如，大多數網站現在默認使用TLS從http（端口80）更改為https（端口443）。 這是一種客戶端-服務器模型，其中客戶端發起連接請求，服務器提供安全協議。 \n example\xa0 \n Try this: \n \n Type: http://facebook.com or http://google.com into the browser of your choice. Notice the new URL changed to https. \n \n \xa0 \xa0 \xa0 \xa0 \xa0在您選擇的瀏覽器中輸入：http://facebook.com或http://google.com。 請注意，新的URL更\xa0 \xa0 \xa0 \xa0 \xa0 \xa0改為https。 \n \n Next, click on the padlock → connection. If you have an antivirus plug-in you might see the company’s certificate instead in browsers such as Internet Explorer. \n \n \xa0 \xa0 \xa0 \xa0 \xa0接下來，單擊掛鎖→連接。 如果您具有防病毒插件，則可能會在Internet Explorer之類的瀏覽器\xa0 \xa0 \xa0 \xa0 \xa0 \xa0中看到該公司的證書。 \n \n', 'tags': '', 'url': 'P110 SSL.html'}, {'title': 'PHC15\xa0Introduction to Wireless Networking', 'text': '', 'tags': '', 'url': 'PHC15\xa0Introduction to Wireless Networking.html'}, {'title': 'P112Wireless LANs', 'text': 'Overview \n The popularity of wireless local area networks (WLAN) has increased exponentially because WLAN enables people to remain connected to the network and the Internet without being tethered by wires. In this unit, we are going to cover the concepts, components, standards, design considerations, and security of WLANs. IEEE 802.11 is the overarching standard for wireless LAN technology, and was developed and is maintained by the Institute of Electrical and Electronics Engineers (IEEE) to provide wireless Ethernet connectivity to a wired IEEE 802.3 network. \n 無線局域網（WLAN）的普及已成倍增加，因為WLAN使人們能夠保持連接到網絡和Internet，而不必受到電線的束縛。 在本單元中，我們將介紹WLAN的概念，組件，標準，設計注意事項和安全性。 IEEE 802.11是無線LAN技術的總體標準，由電氣和電子工程師協會（IEEE）開發和維護，以提供與有線IEEE 802.3網絡的無線以太網連接。 WLAN Concepts Wireless local area networks are broken down into two generalized categories: ad-hoc WLANs and infrastructure WLANs. In ad hoc wireless networks, the wireless devices communicate directly with each other without the need for a wireless access point. This mode is similar to a peer-to-peer network topology, where each device connects to each other device in a mesh configuration using radio frequency waves directly between each wireless device’s interface card. This is the wireless equivalent of connecting two workstations together using a crossover cable, thereby eliminating the need for network infrastructure like hubs and switches. 無線局域網分為兩大類：即席WLAN和基礎設施WLAN。 在自組織無線網絡中，無線設備之間直接相互通信，而無需無線接入點。 此模式類似於點對點網絡拓撲，在這種拓撲中，每個設備都在網狀配置中使用射頻波直接在每個無線設備的接口卡之間連接到彼此。 這相當於使用交叉電纜將兩個工作站連接在一起的無線方式，從而消除了對集線器和交換機等網絡基礎設施的需求。 The second category, infrastructure WLANs, is the version that is most often and widely utilized. When operating in infrastructure mode, the wireless devices communicate to a centralized wireless router or wireless access point, and then use that centralized device to initiate communication with other wireless or wired devices that are also attached to the centralized device. This is the wireless equivalent of connecting multiple workstations to a common hub or switch and utilizing that network device to create communication between the workstations. 第二類是基礎設施WLAN，是最常用和廣泛使用的版本。 當在基礎結構模式下運行時，無線設備與集中式無線路由器或無線接入點進行通信，然後使用該集中式設備啟動與也連接到該集中式設備的其他無線或有線設備的通信。 這相當於將多個工作站連接到公共集線器或交換機，並利用該網絡設備在工作站之間創建通信。 \n', 'tags': '', 'url': 'P112Wireless LANs.html'}, {'title': 'P113 Wireless Devices', 'text': 'As previously stated, most wireless networks utilize infrastructure mode and make use of a wireless router or wireless access point to connect the multitude of wireless devices in a given network. A wireless router is used in most small office/home office (SOHO) networks. These devices combine a router, a switch, and a wireless access point and serve as a base station and gateway for the wireless devices. The wireless router allows the wireless devices to communicate with each other using its wireless access point and switch functionality, and then uses its router functionality to connect devices to the remote network: in most cases, the Internet. The wireless router often combines multiple devices into a single, small device. These features include a wireless access point (WAP), a switch, a router, a firewall, and a modem (either cable, fiber, or DSL depending on the Internet service provider). \n \n 如前所述，大多數無線網絡都利用基礎架構模式，並利用無線路由器或無線接入點來連接給定網絡中的眾多無線設備。 在大多數小型辦公室/家庭辦公室（SOHO）網絡中使用無線路由器。 這些設備將路由器，交換機和無線接入點結合在一起，並充當無線設備的基站和網關。 無線路由器允許無線設備使用其無線接入點和交換機功能相互通信，然後使用其路由器功能將設備連接到遠程網絡：在大多數情況下為Internet。 無線路由器通常將多個設備組合為一個小型設備。 這些功能包括無線訪問點（WAP），交換機，路由器，防火牆和調製解調器（電纜，光纖或DSL，具體取決於Internet服務提供商）。 \n \n Wireless access points, which are integrated into SOHO wireless routers, can also be purchased as standalone units. These are most often seen in corporate environments as part of an enterprise network. A wireless access point enables a wired LAN to communicate with a wireless LAN. The standalone WAP does not interconnect the two networks, though, since it is not a router. A WAP is simply a physical device that converts the radio frequency into 1s and 0s that are easily understood by the physical switch. Note that all wireless devices and the devices on the wired LAN are seen as a single subnet in a standard network. A WAP operates like a hub, broadcasting all the information it receives over the radio frequency waves and relying on the connected devices to only listen to their own traffic. \n \n 集成到SOHO無線路由器中的無線訪問點也可以作為獨立單元購買。 這些通常在公司環境中被視為企業網絡的一部分。 無線訪問點使有線局域網能夠與無線局域網進行通信。 但是，獨立的WAP無法將兩個網絡互連，因為它不是路由器。 WAP只是將無線電頻率轉換為1和0的物理設備，物理交換機很容易理解。 請注意，所有無線設備和有線LAN上的設備在標準網絡中都被視為單個子網。 WAP就像集線器一樣工作，它會通過射頻波廣播接收到的所有信息，並依靠連接的設備僅監聽其自身的流量。 \n \n Wireless network interface cards (NICs) for WiFi, Bluetooth, and infrared are generally integrated into motherboard circuitry. If your computer doesn’t have one built in, you have the ability to add one either using an external USB wireless network adapter, or installing one in a PCIe expansion slot; just remember to install the appropriate drivers for your operating system to enable proper operations. \n \n 用於WiFi，藍牙和紅外的無線網絡接口卡（NIC）通常集成在主板電路中。 如果您的計算機沒有內置計算機，則可以使用外部USB無線網絡適配器添加計算機，也可以在PCIe擴展插槽中安裝計算機。 只需記住為您的操作系統安裝適當的驅動程序即可啟用正確的操作。 \n \n \n', 'tags': '', 'url': 'P113 Wireless Devices.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'TEST', 'text': '', 'tags': '', 'url': 'TEST.html'}]};