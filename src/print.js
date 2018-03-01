/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

/* eslint no-undef: 0 */

import { criarRelatorio } from './calc/funcoes'

function fail(err) {
    alert("Error: " + err)
}

export const salvar = () => {
    if(!window.cordova) {
        //criarRelatorio();
        return;
    }
    
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
        var now = new Date();
        dir.getFile(now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear() + " " + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds() + ".pdf", { create: true }, function(file) {
            const logOb = file;
            if (!logOb) return;
            logOb.createWriter(function(fileWriter) {
                var doc = criarRelatorio();
                var data = doc.output();
                var buffer = new ArrayBuffer(data.length);
                var array = new Uint8Array(buffer);
                for (var i = 0; i < data.length; i++) {
                    array[i] = data.charCodeAt(i);
                }

                fileWriter.seek(fileWriter.length);
                fileWriter.write(buffer);
                alert("Download Completo");
            }, fail);
        });
    });
}

/* eslint no-undef: 1 */