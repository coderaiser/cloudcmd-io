---
layout: default
sitemap: false
lang:
 - name: English
   link: //cloudcmd.io
 
 - name: Ukrainian
   link: //ua.cloudcmd.io
 
 - name: Russian
   link: //ru.cloudcmd.io
 
scripts:
 - //ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js
 - //cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js
 - //files.cloudcmd.io/js/view.js

styles:
 - https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css

hideDownloadButtons: true
---

# Cloud Commander v15.9.1

### [主頁][MainURL] [博客][BlogURL] 試玩(![Heroku][Heroku_LIVE_IMG] [Heroku][HerokuURL])

[MainURL]: http://cloudcmd.io "主頁"
[BlogURL]: http://blog.cloudcmd.io "博客"
[HerokuURL]: https://cloudcmd.herokuapp.com/ "Heroku"
[HEROKU_LIVE_IMG]: https://status.cloudcmd.io/host/cloudcmd.herokuapp.com/img/file.png "Heroku"
[DWORD]: https://github.com/cloudcmd/dword "以 CodeMirror 為編輯器"
[EDWARD]: https://github.com/cloudcmd/edward "以 Ace 為編輯器"
[DEEPWORD]: https://github.com/cloudcmd/deepword "以 Monaco 為編輯器"
[EDWARD_KEYS]: https://github.com/cloudcmd/edward/#hot-keys "Edward 快速鍵"
[TERMUX]: https://termux.com "Termux"
[INLY]: https://github.com/coderaiser/node-inly "備份解壓"

**Cloud Commander** 雙面板檔案處理器同時支援操作終端及編輯器.  可以幫助你利用 台式電腦， 手提電腦，智能電話， 平板電腦上瀏覽器來 管理伺服器上的檔案， 檔案目錄以及應用程式.

![Cloud Commander](/img/logo/cloudcmd.png "Cloud Commander")

## 優勢

- 開源軟件 (**MIT License**).
- 經典的雙面板操作介面.
- 可設置**權限**..
- 客戶端只需使用一般瀏覽器.
- 伺服器端可使用 **視窗**, **Linux**, **蘋果** and **安卓** (需外加 Termux[TERMUX]).
- 可作本地操作及遙距操作.
- 操作介面 隨設備畫面大小自動調整.
- **內置3種文字編輯器** 支援關鍵字 **不同顏色加注**: [Dword][DWORD], [Edward][EDWARD] and [Deepword][DEEPWORD].
- [Console](https://github.com/cloudcmd/console "Console") 支援操作系統的默認 文字指令輸入介面.
- 使用 **JavaScript/Node.js** 編程.
- 內置檔案壓縮格式: **zip** and **tar.gz**.
- 內置檔案解壓格式: **zip**, **tar**, **gz**, **bz2**, **.tar.gz** and **.tar.bz2** (with help of [inly][INLY]).

## 軟件安裝

安裝 **Cloud Commander** 方法非常簡單:

- 先安裝 最新 版本的 [node.js](https://nodejs.org/ "node.js").
- 輸入 npm 指令 安裝 cloudcmd:

```sh
npm i cloudcmd -g
```

如果遇到問題：:

```sh
npm i cloudcmd -g --force
```

## 使用方法

啟動伺服器， 只需在終端機窗口執行全局安装的 npm 包:

```sh
cloudcmd
```

Cloud Commander 支援下面的命令行參數:

|參數                      |功能
|:------------------------------|:------------------------------
| `-h, --help`                  | 幫助
| `-v, --version`               | 顯示版本資料， 然後關閉
| `-s, --save`                  | 儲存設定檔
| `-o, --online`                | 從遠端伺服器下載脚本
| `-a, --auth`                  | 啟動需授權才可存取模式
| `-u, --username`              | 設定使用者帳號
| `-p, --password`              | 設定使用者密碼
| `-c, --config`                | 設定檔路俓
| `--show-config`               | 顯示設定檔數值
| `--show-file-name`            | 顯示檢視/修改中的檔案名
| `--editor`                    | 設定編輯器: "dword", "edward" or "deepword"
| `--packer`                    | 設定檔案壓縮器: "tar" or "zip"
| `--root`                      | 設定根目錄
| `--prefix`                    | 設定 url 字首
| `--prefix-socket`             | 設定 socket 字首 
| `--port`                      | 設定通訊埠號碼
| `--confirm-copy`              | 複製前需確認 
| `--confirm-move`              | 移動前需確認
| `--open`                      | 伺服器啟動後打開 瀏覽器
| `--name`                      | 設定瀏覽器頁名
| `--one-file-panel`            | 使用單面板操作
| `--keys-panel`                | 顯示按鈕版面
| `--contact`                   | 啟動聯絡人
| `--config-dialog`             | 使用設定對話框
| `--config-auth`               | 啟動授權修改設定的對話框 
| `--console`                   | 使用控制台
| `--sync-console-path`         | 控制台路俓同步 
| `--terminal`                  | 啟動終端機
| `--terminal-path`             | 設定終端機路俓
| `--terminal-command`          | 設定終端機中指令(畎認值: shell )
| `--terminal-auto-restart`     | 終端機退出後自動重啟
| `--vim`                       | 啟動 vim 快速/指令鍵
| `--columns`                   | 設定可視欄寬 
| `--export`                    | 啟動導出設定檔至遠端伺服器
| `--export-token`              | 導出遠端伺服器的授櫂token    
| `--import`                    | 啟動導入遠端伺服器設定
| `--import-token`              | 導入遠端伺服器的授櫂token 
| `--import-url`                | 伺服器的 url
| `--import-listen`             | 啟動設定檔從遠端伺服器更新 
| `--dropbox`                   | 啟動 dropbox 聯動
| `--dropbox-token`             | 設定 dropbox token
| `--log`                       | 啟動日誌
| `--no-show-config`            | 不顯示設定值
| `--no-server`                 | 不啟動伺服器
| `--no-auth`                   | 無須授權存取
| `--no-online`                 | 從本地伺服器下載腳本
| `--no-open`                   | 伺服器啟動後不要打開瀏覽器
| `--no-name`                   | 不設定瀏覽器頁名
| `--no-keys-panel`             | 關閉按鈕版面
| `--no-one-file-panel`         | 使用雙面板操作
| `--no-confirm-copy`           | 不設定複製前確認
| `--no-confirm-move`           | 不設定移動前確認
| `--no-config-dialog`          | 關閉設定對話框
| `--no-config-auth`            | 關閉授權修改設定的對話框
| `--no-console`                | 不設定控制台 
| `--no-sync-console-path`      | 取消終控制台路俓同步 
| `--no-contact`                | 不設定聯絡人 
| `--no-terminal`               | 不設定終端機
| `--no-terminal-command`       | 不設定終端機中指令
| `--no-terminal-auto-restart`  | 終端機退出後不自動重啟
| `--no-vim`                    | 不使用 vim 快速/指令鍵
| `--no-columns`                | 使用畎認欄寬 
| `--no-export`                 | 不使用導出設定檔至遠端伺服器
| `--no-import`                 | 不使用導入遠端伺服器設定
| `--no-import-listen`          | 不使用設定檔從遠端伺服器更新
| `--no-show-file-name`         | 不顯示檢視/修改中的檔案名
| `--no-dropbox`                | 關閉 dropbox 聯動
| `--no-dropbox-token`          | 關閉 dropbox token
| `--no-log`                    | 關閉 日誌

如果指令行中沒有設定相關參數  , Cloud Commander 會從`~/.cloudcmd.json` 設定檔中讀取. 畎認通訊埠 `8000`.

開始使用程式的瀏覽器介面, 輸入下面的 URL:

```
http://localhost:8000
```

## 更新程式

如您是通過 npm 安裝 Cloud Commander, 關閉伺服器.  然後重新安裝:

```sh
npm install cloudcmd -g
```

之後, 輸入`cloudcmd` 重啟伺服器, 並刷新網頁

## 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `F1`                  | 幫助
| `F2`                  | 顯示 `用家選單`
| `F3`                  | 檢視, 改動工作目錄
| `Shift + F3`          | 檢視原始檔案, 改動工作目錄
| `F4`                  | 修改
| `F5`                  | 複製
| `Alt` + `F5`          | 壓縮打包
| `F6`                  | 修改檔案名/移動
| `Shift` + `F6`        | 修改當前檔案名
| `F7`                  | 加入新目錄
| `Shift + F7`          | 加入新檔案
| `F8`, `Delete`        | 移除
| `Shift + Delete`      | 無須確認直接移除
| `F9`                  | 菜單
| `Alt` + `F9`          | 解壓
| `F10`                 | 設定
| `*`                   | 全部選取/取消全部選取
| `+`                   | 打開選取
| `-`                   | 收納選取
| `Ctrl + X`            | 剪下至暫存
| `Ctrl + C`            | 複製至暫存
| `Ctrl + V`            | 從暫存貼上
| `Ctrl + Z`            | 清除暫存
| `Ctrl + P`            | 複製路徑
| `Ctrl + R`            | 刷新
| `Ctrl + D`            | 清除本地儲存
| `Ctrl + A`            | 選取頁中全部檔案
| `Ctrl + M`            | [在編輯器中修改已選取檔案名](https://github.com/coderaiser/cloudcmd/releases/tag/v12.1.0) 
| `Ctrl + U`            | 跳至另一頁
| `Ctrl + F3`           | 以檔案名排序
| `Ctrl + F5`           | 以日期排序
| `Ctrl + F6`           | 以檔案大小排序
| `Up`, `Down`          | 在當前目錄上下移動
| `Enter`               | 進入目錄/檢視檔案
| `Alt + Left/Right`    | 在目標頁面中顯示當前目錄內容
| `Alt + G`             | 跳至目錄
| `Ctrl + \`            | 跳回根目錄
| `Tab`                 | 在頁面上移動
| `Page Up`             | 向上跳一頁
| `Page Down`           | 向下跳一頁
| `Home`                | 跳回表列起始
| `End`                 | 跳至表列結尾
| `Space`               | 選取當前檔案(並讀取目錄大小)
| `Insert`              | 選取當前檔案(並跳至下一項)
| `F9`                  | 內容選單
| `~`                   | 控制台
| `Esc`                 | 選用/不選用 vim 快速/指令鍵 (`檔案管家`, `編輯器`)

### Vim

當措令中指明 `--vim` 選項時, 或在設定檔中指明 `vim`, 下列快速/功能鍵便會啟動:

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `j`                   | 跳至下一個檔案
| `k`                   | 跳回上一個檔案
| `dd`                  | 移除當前檔案
| `G` or `$`            | 跳至最低檔案
| `gg` or `^`           | 跳至最頂檔案 
| `v`                   | 檢視模式 
| `y`                   | 複製(在檢視模式中已選取檑案)
| `p`                   | 貼上檑案
| `Esc`                 | 取消全部選取
| `/`                   | 在當前目錄中搜尋檑案
| `n`                   | 跳至下一個找到的檔案 
| `N`                   | 跳回上一個找到的檔案

指令鍵可連合使用, 舉例:

- `5j` 向下連跳 **5** 個檔案;
- `d5j`刪除下面 **5** 個檔案;
- `dG` 刪除至目錄最低;

## 拖放

以下的功能 可通過 "拖放" 實施.

| 滑鼠鍵			    | 鍵        | 從        | 至		        |功能
|:------------------|:----------|:----------|:--------------|:------------------
| 左 	             |           | 頁面     | 頁面         | copy files
| 左    	         | `Shift`   | 頁面     | 頁面         | rename/move files
| 左       	         |           | 頁面     | 桌面         | download files
| 左                 |           | 桌面     | 頁面         | upload files

## 檢視

![View](/img/screen/view.png "View")

### 功能

- 檢視圖像.
- 檢視文檔.
- 打開聲音檔.
- 打開影像檔.

### 快速鍵

|快速鍵                  |功能
|:----------------------|:--------------------------------------------
| `F3`                  | 打開
| `Esc`                 | 關閉

## 編輯

![Edit](/img/screen/edit.png "Edit")

### 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `F4`                  | 打開
| `Shift + F4`          | 使用 "vim" 模式打開
| `Esc`                 | 關閉

快速鍵詳情:  [Edward hotkeys][EDWARD_KEYS].

## 控制台

![Console](/img/screen/console.png "Console")

### 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `~`                   | 打開
| `Ctrl + P`            | 貼上當前路徑
| `Esc`                 | 關閉

詳細使用方面請參考[console hot keys](https://github.com/cloudcmd/console#hot-keys "控制台 快速鍵").

## 終端機

![Terminal](/img/screen/terminal.png "Terminal")

### 安裝

終端機畎認是不啟動及沒有安裝. 如果想使用, 請以 [gritty](https://github.com/cloudcmd/gritty "Gritty") 安裝:

```sh
npm i gritty -g
```

並以下面指命設定終端機路徑:

```sh
cloudcmd --terminal --terminal-path `gritty --path` --save
```

### 視窗操作環境

如在視窗操作環境下不可安裝 `gritty`, 嘗試先安裝 `windows-build-tools`:

```sh
npm install windows-build-tools -g
```

然後使用下面指令找出`gritty` 路徑:

```sh
gritty --path
```

路徑的格式類似:

```sh
C:\Users\coderaiser\AppData\Roaming\npm\node_modules\gritty
```

以`--terminal-path` 參數設定路徑:

```sh
cloudcmd --save --terminal --terminal-path "C:\Users\coderaiser\AppData\Roaming\npm\node_modules\gritty"
```

設定路徑後, 可以在 Cloud Commander 內使用終端機.

### 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `Shift` + `~`         | 打開
| `Shift` + `Esc`       | 關閉

## 環境參數

在 Cloud Commander 的終端機下執行的程序會包含下面的環境參數:

- `ACTIVE_DIR` - 當前所在目錄
- `PASSIVE_DIR` - 在另一頁所在目錄
- `CURRENT_NAME` - 當前所指的檔案名字
- `CURRENT_PATH` - 當前所指的檔案的路徑

在 Unix 操作環境, 可以此方式使用這參數:

```sh
~> echo $CURRENT_PATH
/home/coderaiser/cloudcmd/bin/cloudcmd.js
```

## 設定

![Config](/img/screen/config.png "Config")

### 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `F10`                 | 打開
| `Esc`                 | 關閉

當修改任何参數時, 這`~/.cloudcmd.json` 檑案會自動刷新.
這檔案亦可通過任何編輯器手動修改.
以下是各參數所指的功能:

```json
{
    "name"                  : "",       // 瀏覽器所顯示的頁名
    "auth"                  : false,    // 使用 http 頁面准入驗證 http 
    "username"              : "root",   // 准入驗證的用戶名稱 
    "password"              : "toor",   // 准入驗證的用戶密碼
    "algo"                  : "sha512WithRSAEncryption", // 加密方式
    "editor"                : "edward", // 畎認值, 可選 "dword" or "edward"
    "packer"                : "tar",    // 畎認值, 可選 "tar" or "zip"
    "diff"                  : true,     // 存檔時只傳送檔案中的差距, 不是整個檔案.
    "zip"                   : true,     // 發送前將文字檔壓縮 
    "buffer"                : true,     // 複製檔案時使用緩衝記億
    "dirStorage"            : true,     // 儲存目錄的表列
    "online"                : false,    // 不會從 cdn 儲存 js 檔
    "open"                  : true,     // 當伺服器起動時打開瀏覽器
    "oneFilePanel"          : false,    // 只顯示單版面
    "keysPanel"             : true,     // 在頁面下顯示傳統的功能鍵列 
    "port"                  : 8000,     // http 埠
    "ip"                    : null,     // ip 或 "空" (畎認值)
    "root"                  : "/",      // 根目錄
    "prefix"                : "",       // url 字首
    "prefixSocket"          : "",       // 使用 unix 接口 的字首 
    "confirmCopy"           : true,     // 複製前確認 
    "confirmMove"           : true,     // 移動前確認
    "showConfig"            : false,    // 起動前顯示設定
    "showFileName"          : false,    // 檢視/修改時, 不要顯示檔案名字
    "contact"               : true,     // 使用聯繫人
    "configDialog"          : true,     // 使用設定對話框
    "configAuth"            : true,     // 容許對話框內修改櫂限
    "console"               : true,     // 使用控制台
    "syncConsolePath"       : false,    // 控制台路徑同步
    "terminal"              : false,    // 不使用終端機
    "terminalPath"          : "",       // 終端機路徑 
    "terminalCommand"       : "",       // 設定終端機起動指令
    "terminalAutoRestart"   : true,     // 離開後重啟的指令
    "vim"                   : false,    // 不使用 vim 快速鍵
    "columns"               : "name-size-date-owner-mode", // 設定可視欄
    "export"                : false,    // 使用通過伺服器輸出設定檔
    "exportToken"           : "root",   // 匯出伺服器的 token
    "import"                : false,    // 使用通過伺服器輸入設定檔
    "import-url"            : "http://localhost:8000",   // 伺服器的 url
    "importToken"           : "root",   // 匯入伺服器 token 
    "importListen"          : false,    // 定期檢視設定更新
    "dropbox"               : false,    // 不使用 dropbox 連結 
    "dropboxToken"          : "",       // dropbox token
    "log"                   : true     // 日誌
}
```

### 環境參數

部份設定參數可以被環境參數取代:

- `CLOUDCMD_NAME` - 瀏覽器顯示的頁名
- `CLOUDCMD_OPEN` - 伺服器起動時 打開瀏覽器
- `CLOUDCMD_EDITOR` - 設定 編輯器
- `CLOUDCMD_COLUMNS` - 設定可視欄
- `CLOUDCMD_CONTACT` - 便用聯絡人
- `CLOUDCMD_CONFIG_DIALOG` - 可使用設定對話框
- `CLOUDCMD_CONFIG_AUTH` - 容許對話框內修改櫂限
- `CLOUDCMD_CONSOLE` - 可使用控制台
- `CLOUDCMD_SYNC_CONSOLE_PATH` - 控制台路俓同步
- `CLOUDCMD_TERMINAL` - 可使用終端機
- `CLOUDCMD_TERMINAL_PATH` - 設定終端機路俓
- `CLOUDCMD_TERMINAL_COMMAND` - 設定終端機起動指令(默認值 shell)
- `CLOUDCMD_TERMINAL_AUTO_RESTART` - 退出後重新起動終端機
- `CLOUDCMD_KEYS_PANEL` - 設定按鈕顯示
- `CLOUDCMD_ONE_FILE_PANEL` - 設定單頁面顥示
- `CLOUDCMD_AUTH` - 設定存取權限
- `CLOUDCMD_USERNAME` - 設定用戶名稱
- `CLOUDCMD_PASSWORD` - 設定用戶密碼
- `CLOUDCMD_PREFIX` - 設定 url 字首
- `CLOUDCMD_ROOT` - 設定根目錄 
- `CLOUDCMD_VIM` - 使用 vim 快速鍵
- `CLOUDCMD_CONFIRM_COPY` - 複製前確認
- `CLOUDCMD_CONFIRM_MOVE` - 移動前確認
- `CLOUDCMD_SHOW_FILE_NAME` - 檢視/修改時, 顯示檔案名字 
- `CLOUDCMD_EXPORT` - 使用通過伺服器輸出設定檔 
- `CLOUDCMD_EXPORT_TOKEN` - 匯出伺服器的 token
- `CLOUDCMD_IMPORT` - 使用伺服器輸入設定檔 
- `CLOUDCMD_IMPORT_TOKEN` - 匯入遠端伺服器的連接 token
- `CLOUDCMD_IMPORT_URL` - 匯入遠端伺服器的 url 
- `CLOUDCMD_IMPORT_LISTEN`- 使用定期檢視遠端伺服器設定檔更新

### 用家自訂選單

當用家按 `F2` 鍵時, Cloud Commander 會讀取在上一層目錄的`.cloudcmd.menu.js` 檔, 如找不到檔案便嘗試找`~/.cloudcmd.menu.js`.

下面是 `用家自訂選單` 例子:

```js
const RENAME_FILE = 'Rename file';

export default {
    '__settings': {
        select: [
            RENAME_FILE,
        ],
        run: false,
    },
    [`F2 - ${RENAME_FILE}`]: async ({DOM}) => {
        await DOM.renameCurrent();
    },
    'D - Build Dev': async ({CloudCmd}) => {
        await CloudCmd.TerminalRun.show({
            command: 'npm run build:client:dev',
            autoClose: false, // optional
            closeMessage: 'Press any button to close Terminal', // optional
        });
        
        await CloudCmd.refresh();
    },
    'P - Build Prod': async ({CloudCmd}) => {
        await CloudCmd.TerminalRun.show({
            command: 'npm run build:client',
            autoClose: true, // optional
        });
        
        await CloudCmd.refresh();
    },
    'C - Create User Menu File': async ({DOM, CloudCmd}) => {
        const {CurrentInfo} = DOM;
        
        const {dirPath} = CurrentInfo;
        const path = `${dirPath}.cloudcmd.menu.js`;
        const {prefix} = CloudCmd;
        
        const data = await readDefaultMenu({prefix});
        await createDefaultMenu({
            path,
            data,
            DOM,
            CloudCmd,
        });
    },
};

async function createDefaultMenu({path, data, DOM, CloudCmd}) {
    const {IO} = DOM;
    
    await IO.write(path, data);
    await CloudCmd.refresh();
    
    DOM.setCurrentByName('.cloudcmd.menu.js');
    
    await CloudCmd.EditFile.show();
}

async function readDefaultMenu({prefix}) {
    const res = await fetch(`${prefix}/api/v1/user-menu/default`);
    const data = await res.text();
    
    return data;
}
```

上面 3 個指令可通過 滑鼠鍵雙激, 輸入鍵, 或已連結鍵 ( 例子中 `F2`, `D` or `P` ). 更多的例子可參考[User Menu Cookbook](https://github.com/coderaiser/cloudcmd/wiki/User-Menu-Cookbook).
亦可通過終端機執行上面的指令或執行 `Cloud Commander` 的內置功能,  


#### 用家自訂選單 API 

下面是可用在 **User Menu**. **DOM** and **CloudCmd** 的 API, 當中有兩個物件可從 arguments 解構賦值中讀取

**DOM** 包括全部`Cloud Commander` 基礎功能 ( 修改檔案, 移除檔案, 下載檔案 等等);

- `renameCurrent` - 會顯示修改檔案的對話框並修改檔名.

**CloudCmd** 包括全部模組 (`Terminal`, `View`, `Edit`, `Config`, `Console` etc);

- `TerminalRun` - 是一個模組顥示終端機並執行 `command` 在完成後關閉終端機.

**IO** 檔案 API

- `rename(from, to)` - 把檔名從 `from` 改為 `to`
- `move(from, to, names)` - 把檔名包含 `names` 從 `from` 改為 `to`;
- `copy(from, to, names)` - 把檔名包含 `names` 從 `from` 複製 `to`;
- `createDirectory(path)` - 在 `path` 新建一個目錄;

### 遠端操作

用家可利用 Cloud Commander 開啟遠端存取門, 作為一項微服務.  這便是 Cloud Commander 遠端操作功能所在. 
這個架構包括 匯出伺服器及匯入客戶端兩部份, 啟動此功能須使用相應的命令行參數 `--export` `--import` 
而這連結是透過 "token" 達成, 因此採用相同的 `--import-token` `--export-token` 值. 
如想啟動匯入客戶端功能, 須同時設定 `--import-url` 參數, 來讓客戶端連接遠端已匯出的 Cloud Commander 伺服器

兩種方法來讓匯入客戶端從匯出伺服器接收設定檔 
- 啟動時讀取整個設定檔 (畎認值)
- 讀取設定檔 (使用 `--import-listen` 參數)

#### 應用例子 - 採用 Clound Commander 作為遠端操作應用, 並從遠端讀取設定檔:

*匯出伺服器*:

```
coderaiser@cloudcmd:~$ cloudcmd --port 1234 --export --export-token=cloudcmd
```

... *匯入客戶端*:

```
coderaiser@cloudcmd:~$ cloudcmd --name importer --port 4321 --import-url http://127.0.0.1:1234 --import-token=cloudcmd --no-server --save
```

下面是"匯出伺服器"的日誌:

```
url: http://localhost:1234/
2018.08.23 13:41:45 -> export: try to auth from importer [127.0.0.1:4321]
2018.08.23 13:41:45 -> export: connected to importer [127.0.0.1:4321]
2018.08.23 13:41:45 -> export: config send to importer [127.0.0.1:4321]
2018.08.23 13:41:45 -> export: disconnected importer [127.0.0.1:4321]
```

...*匯入客戶端* 的日誌:

```
2018.08.23 13:47:36 -> import: try to auth to http://127.0.0.1:1234
2018.08.23 13:47:36 -> import: connected to http://127.0.0.1:1234
2018.08.23 13:47:36 -> import: config received from http://127.0.0.1:1234
2018.08.23 13:47:36 -> import: disconnected from http://127.0.0.1:1234
```

當 *匯入客戶端* 啟動 `--import-listen` 参數時, 便會建立一個常存連結, 並讓匯入客戶端從匯出伺服器接收設定檔.

在此應用情境下, *匯出伺服器* 省略下面的設定值:

- `auth`
- `username`
- `password`
- `algo`
- `name`
- `ip`
- `port`
- `root`
- `import`
- `importUrl`
- `importToken`
- `export`
- `exportToken`
- `log`
- `configDialog`

## 選單

![Menu](/img/screen/menu.png "Menu")

按滑鼠右鍵便會顯示這選單:

- View
- Edit
- Rename
- Delete
- Pack
- Extract
- Upload To Cloud
- Download
- Cut
- Copy
- Paste
- New (File, Directory)
- Upload
- Upload From Cloud
- (Un)Select All
- Log Out (available when the `authorization` is enabled)

### 快速鍵

|快速鍵                    |功能
|:----------------------|:--------------------------------------------
| `F9`                  | 打開
| `Esc`                 | 關閉

## 單頁面顥示

Cloud Commander 可在畫面寬度不足時 (例如使用移動裝置或平板電腦) 轉為 單頁面顥示, 或可直接使用 `--one-file-panel` 參數

![One file panel](/img/screen/one-file-panel.png "One file panel")

## 作為中間件 

Cloud Commander 可配合 node.js 用作中間件來利用 [socket.io](http://socket.io "Socket.IO") 及 [express](http://expressjs.com "Express") 設立訢的應用軟件. 

起始 `package.json`:

```
npm init -y
```

安裝依賴項:

```
npm i cloudcmd express socket.io -S
```

創建 `index.js`:

```js
import http from 'http';
import cloudcmd from 'cloudcmd';
import io from 'socket.io';
import express from 'express';

const app = express();
const port = 1337;
const prefix = '/';

const server = http.createServer(app);
const socket = io.listen(server, {
    path: `${prefix}socket.io`,
});

const config = {
    name: 'cloudcmd :)',
};

const filePicker = {
    data: {
        FilePicker: {
            key: 'key',
        },
    },
};

// override option from json/modules.json
const modules = {
    filePicker,
};

const {
    createConfigManager,
    configPath,
} = cloudcmd;

const configManager = createConfigManager({
    configPath,
});

app.use(prefix, cloudcmd({
    socket, // used by Config, Edit (optional) and Console (required)
    config, // config data (optional)
    modules, // optional
    configManager, // optional
}));

server.listen(port);
```

下面的例字選用了兩個 `Config Managers`:

```js
import http from 'http';
import cloudcmd from 'cloudcmd';
import io from 'socket.io';
const app = require('express')();

const port = 8000;
const prefix1 = '/1';
const prefix2 = '/2';

const {createConfigManager} = cloudcmd;

const server = http.createServer(app);
const socket1 = io.listen(server, {
    path: `${prefix1}/socket.io`,
});

const socket2 = io.listen(server, {
    path: `${prefix2}/socket.io`,
});

const configManager1 = createConfigManager();
configManager1('name', '1');

const configManager2 = createConfigManager();
configManager2('name', '2');

app.use(prefix1, cloudcmd({
    socket: socket1,
    configManager: configManager1,
}));

app.use(prefix2, cloudcmd({
    socket: socket2,
    configManager: configManager2,
}));

server.listen(port);
```

如果想使用存取權限, 可在設定檔列明相關資訊.  產生密碼方法, 可使用 `criton`, 安裝方法 `npm i criton --save`, 並用此軟件 (或是其他方式) 來產生密碼的 hash.

```js
import criton from 'criton';
const algo = 'sha512WithRSAEncryption'; // default

// you can generate a hash dynamically
const password = criton('root', algo);

// or use a pregenerated hash as well
'2b64f2e..ca5d9a9';

const auth = true;
const username = 'root';

const config = {
    algo, // optional
    auth,
    username,
    password,
};
```
這樣便可以開始起動了!

## 授權

在 `~/.cloudcmd.json` 檔內只存放了 [password hash] (https://github.com/coderaiser/cloudcmd/blob/v11.8.3/json/config.json#L5) 
基於保安考量, 即使假如這檔案被竊, 由於 hash 的方法是很強 (https://github.com/coderaiser/cloudcmd/blob/v11.8.3/json/config.json#L6),  而且還可以改動, 密碼亦不會被直接讀取.  

用家亦不應直接把密碼以純文字形式記錄在 `~/.cloudcmd.json`, 可以使用這指令

```
cloudcmd --username name --password "密碼" --auth --save --no-server
```

上面指令會產生密碼的 hash, 並記錄在 `~/.cloudcmd.json`.

## 伺服器

一般情況下, 非 root 執行的程式是不可以 使用 1024 以下的通訊埠. 除此之外, ** 作者亦建議 以非 root 的身份起動 Cloud Commander **.
如何可以避開通訊埠的限制? 有不少使捷方面,其中一種是 通訊埠轉移.
  

### Iptables

只需以畎認值執行 `shell/addtables.sh`

```sh
iptables -t nat -L # look rules before
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 4430
iptables -t nat -L # look rules after
```

應該可以找到下面的法則 (在設定檔中 **8000** 及 **4430** 應為 **port** and **sslPort**)

```sh
target     prot opt source               destination
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:http redir ports 8000
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:https redir ports 4430
```

如用家希望回復先前設定, 只需清除相關法則 (例子中顯示 法則 **1** 以及 **2**; 用家的情況可能不一樣 ).

```sh
iptables -t nat -D PREROUTING 2
iptables -t nat -D PREROUTING 1
```

### 使用 nginx

下載 [nginx](http://nginx.org/ "nginx"). 在 Linux 操作環境下, 可執行:

```sh
sudo apt-get install nginx #for ubuntu and debian
```

接著, 產生一個主機檔 **/etc/nginx/sites-available/io.cloudcmd.io**
(例子: 打比方, *io.cloudcmd.io* 是用家的域名) 在檔案中包括:

```sh
server {
    listen 80;
    client_max_body_size 100m;
    server_name io.cloudcmd.io;
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
    location / {
        proxy_pass          http://127.0.0.1:8000/;
    }
}
```

**如用家使用 SSL**, 在 `server`方塊中加入:

```sh
server {
    listen 443;
    client_max_body_size 100m;
    ssl                  on;
    ssl_certificate      /home/coderaiser/cloudcmd/ssl/ssl.crt;
    ssl_certificate_key  /home/coderaiser/cloudcmd/ssl/ssl.key;
    server_name io.cloudcmd.io;
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
    location / {
        proxy_pass    http://127.0.0.1:8000/;
    }
}
```

如想啟動 WebSocket 支援, (nginx >= v1.3.13) 改動 `server` 方塊中列明:

```sh
    location / {
        proxy_http_version  1.1;
        proxy_set_header    Upgrade $http_upgrade;
        proxy_set_header    Connection "upgrade";

        proxy_pass          http://127.0.0.1:8000/;
    }
```

如用家希望由 **http**  轉移 **https**, 只需:

```sh
server {
    listen 80;
    server_name admin.cloudcmd.io;
    rewrite ^ https://io.cloudcmd.io$request_uri? permanent; #301 redirect
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
}
```

```sh
# create a symlink of this file
ln -s ./sites-available/io.cloudcmd.io ./sites-enabled
# restart nginx
/etc/init.d/nginx restart
```

## 實施執行

`Cloud Commander` 亦可在 [Heroku](https://heroku.com/deploy?template=https://github.com/coderaiser/cloudcmd "Deploy to Heroku") 上實施

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png "Deploy to Heroku")](https://heroku.com/deploy?template=https://github.com/coderaiser/cloudcmd)

## Docker

用家亦可使用 Docker Container 執行 `Cloud Commander` [docker container](https://hub.docker.com/r/coderaiser/cloudcmd/ "Docker container") 如下:

```sh
docker run -t --rm -v ~:/root -v /:/mnt/fs -w=/root -p 8000:8000 coderaiser/cloudcmd
```

設定檔會從用家主目錄中讀取,  主機的根目錄會定為 `/mnt/fs`, 而在通訊埠`8000`則會在主機上開放出來,
再者, 用家亦可以 `docker-compose.yml` 使用 [docker compose](https://docs.docker.com/compose/ "Docker Compose") 

```yml
version: '2'
services:
  web:
    ports:
      - 8000:8000
    volumes:
      - ~:/root
      - /:/mnt/fs
    image: coderaiser/cloudcmd
```

When you create this file, run:

```sh
docker-compose up
```

# Dropbox

支援 Dropbox 服務已經整合在 Cloud Commander 中, 用家可從本地檔案系統跳到 Dropbox 戶口中.
只需 加入 `--dropbox` 選項, [以及相關 的 dropbox 生成的 token] (https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/).

類似以下情況:

```sh
cloudcmd --dropbox --dropbox-token "用家的 dropbox token"
```
當使用 Dropbox 時, 須注意沒有 控制台/終端機 的遠端支援, 而進程顯示亦不被支援. 只是基礎的支援, 但基本的檔案處理仍可行:

- 創建新檔
- 移除檔案
- 修改檔名/移動檔案
- 檢視檔案
- 修改檔案內容

## 參與項目

大家可使用不同方式參與 `Cloud Commander` 開發:

- 在 patreon 上支持: https://patreon.com/coderaiser;
- 如找到錯處或有新的主意, [create an issue](https://github.com/coderaiser/cloudcmd/issues/new "Create issue");
- 如可改正錯處, 錯字或實施一些新功能, [create a pull request](https://github.com/coderaiser/cloudcmd/compare "Create pull request");
- 如你懂得一種語言,而這種語言並未運用在這項目上, 或想改善現有的翻譯, 用家可在[site translations](https://github.com/coderaiser/cloudcmd/wiki "Cloud Commander community wiki")幫忙;
