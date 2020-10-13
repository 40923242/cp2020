var tipuesearch = {"pages": [{'title': '首頁', 'text': '', 'tags': '', 'url': '首頁.html'}, {'title': 'PCH 14', 'text': '', 'tags': '', 'url': 'PCH 14.html'}, {'title': '1.概述', 'text': '在本課程中，我們將討論傳輸控制協議（TCP）和用戶數據報協議（UDP）以及它們相關的端口和協議。 我們將專門解決當今使用的各種電子郵件端口和協議，並在Web安全的背景下討論安全套接字層/傳輸層安全（SSL / TLS）。 然後，我們將討論文件傳輸協議（FTP）和超文本傳輸協議（HTTP）及其在當今Internet上的使用，以及一些較老的技術，例如Telnet及其更安全的替代方法，安全外殼（SSH）。 \n', 'tags': '', 'url': '1.概述.html'}, {'title': '2.TCP和UDP', 'text': 'TCP是一種面向連接的協議，可確保將數據段從一台設備可靠地傳輸到另一台設備。在傳輸過程中，如果某個段丟失，則發起方設備將檢測到該段並將其重新發送或重新發送。每次通信在收到後都會得到確認，從而提供一個安全的模型來確保成功進行通信。這種傳輸方式適用於所有網絡數據類型，尤其是那些需要確保傳輸的數據類型。 \n 當啟動TCP通信時，發起方和接收方在開始數據傳輸之前執行“三向握手”。 第一步，發起方發送一個設置了同步（SYN）標誌的數據包。 接下來，接收器通過發回一個同步確認（SYN-ACK）標記數據包來確認此SYN標記數據包的接收。 最後，始發者發送對已同步確認的標記數據包的確認，然後發生數據傳輸。 \n \n', 'tags': '', 'url': '2.TCP和UDP.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'TEST', 'text': '', 'tags': '', 'url': 'TEST.html'}]};