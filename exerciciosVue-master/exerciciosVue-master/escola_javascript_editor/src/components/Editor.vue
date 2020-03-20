<template>
  <div class="editor">
      <button @click="openFile" class="button is-small is-primary is-outlined">Abrir Arquivo</button>
    <button @click="saveFile" class="button is-small is-info is-outlined">Salvar Arquivo</button>
    <quill-editor v-model="content" :options="editorOption"></quill-editor>
    <quill-editor
      v-model="content"
      :options="editorOption"
    ></quill-editor>
  </div>
</template>
<script>
    import hljs from "highlight.js";
    import {
        remote
    } from "electron";
    import "highlight.js/styles/monokai-sublime.css";
    import "bulma/css/bulma.min.css";
    import fs from "fs";
    export default {
        name: "Editor",
        data() {
            return {
                content: "",
                editorOption: {
                    modules: {
                        toolbar: {
                            container: [
                                ["bold", "italic", "underline", "strike"],
                                ["blockquote", "code-block"],
                                [{
                                    header: 1
                                }, {
                                    header: 2
                                }],
                                [{
                                    list: "ordered"
                                }, {
                                    list: "bullet"
                                }],
                                [{
                                    script: "sub"
                                }, {
                                    script: "super"
                                }],
                                [{
                                    indent: "-1"
                                }, {
                                    indent: "+1"
                                }],
                                [{
                                    direction: "rtl"
                                }],
                                [{
                                    size: ["small", false, "large", "huge"]
                                }],
                                [{
                                    header: [1, 2, 3, 4, 5, 6, false]
                                }],
                                [{
                                    font: []
                                }],
                                [{
                                    color: []
                                }, {
                                    background: []
                                }],
                                [{
                                    align: []
                                }],
                                ["clean"],
                                ["link", "image", "video"]
                            ],
                            handlers: {
                                emoji: () => {}
                            }
                        },
                        syntax: {
                            highlight: text => hljs.highlightAuto(text).value
                        },
                        imageDrop: true,
                        // plugin resize
                        imageResize: {
                            modules: ["Resize", "DisplaySize", "Toolbar"]
                        },
                        "emoji-toolbar": true,
                        "emoji-shortname": true
                    }
                }
            }
        },
        methods: {
            openFile() {
                // Abre seletor de arquivos
                const [filepath] = remote.dialog.showOpenDialog({
                    properties: ["openFile"]
                });
                const context = this;
                /* Verifica se o usuário não selecionou nenhum arquivo ou 
 selecionou um formato de arquivo não suportado */
                if (filepath === undefined || !filepath.includes(".escola_js")) {
                    alert("Nenhum arquivo selecionado ou formato não suportado.");
                    return;
                }
                fs.readFile(filepath, "utf-8", (err, data) => {
                    if (err) {
                        alert("Um erro ocorreu ao abrir arquivo:" + err.message);
                        return;
                    }
                    // Adiciona o conteúdo do arquivo ao editor  
                    context.content = data;
                });
            },
            saveFile() {
                // Salva arquivo 
                const filenameToSave = remote.dialog.showSaveDialog();
                /* Verifica se o arquivo contém formato suportado e adiciona ao nome do arquivo  o 		  formato .escola_js */
                const filePathToSave = filenameToSave.includes(".escola_js") ?
                    filenameToSave : `${filenameToSave}.escola_js`;

                fs.writeFile(filePathToSave, this.content, err => {
                    if (err) throw err;
                    alert("Arquivo salvo com sucesso!");
                });
            }
        }
    };
</script>

<style>
    .quill-editor,
    .quill-code {
        width: 100%;
        height: 90vh;
    }
    
    .quill-code {
        height: auto;
        border: none;
    }
    
    .quill-code>.title {
        border: 1px solid #ccc;
        border-left: none;
        height: 3em;
        line-height: 3em;
        text-indent: 1rem;
        font-weight: bold;
    }
</style>