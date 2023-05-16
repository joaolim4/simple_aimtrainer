const {app, BrowserWindow, Menu} = require('electron');

var maniWindow = null;

function createNewGame(){
    
}

const menuTemplate = [
    {
        label:'Jogo',
        submenu: [
            {
                label:"Novo Jogo",
                click(){
                    createNewGame()
                }
            },
            {
                label:"Fechar",
                role:process.platform === 'darwin' ? 'close' : 'quit'
                
            }
                
            
        ]
    }
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

app.whenReady().then(async ()=>{
    maniWindow = new BrowserWindow({
        width:600,
        height:600,
        resizable:false
    })

    await maniWindow.loadFile('src/main/index.html');

    // maniWindow.webContents.openDevTools()
})