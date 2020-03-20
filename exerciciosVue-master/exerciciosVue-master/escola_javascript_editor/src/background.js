'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import {
    createProtocol,
    installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
// Adiciona a biblioteca path
import path from 'path'
win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__static, "icon-1.png"), // adiciona ícone a janela
    webPreferences: {
        nodeIntegration: true
    }
})