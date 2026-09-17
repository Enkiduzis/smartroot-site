## Como subir no Servidor Tradicional (Passo a Passo)

Os arquivos finais para publicação estão dentro da pasta gerada. 

### Conteúdo gerado na pasta `out/`:

* **`index.html`** (Página inicial pronta)
* **`404.html`** (Página de erro não encontrado)
* **`.htaccess`** (Regras do servidor Apache/cPanel)
* **`_next/`** (Scripts JS e folhas de estilo CSS compiladas)
* **`images/`** (Logos e imagens do site)
* **`favicon.png`** / **`icon.png`**

### Procedimento de Envio:

1. Acesse a sua hospedagem via **Gerenciador de Arquivos** do cPanel ou cliente FTP (como o FileZilla).
2. Abra a pasta pública do seu domínio (geralmente chamada de `public_html`, `www` ou `htdocs`).
3. Envie o conteúdo de dentro da pasta `out` diretamente para a raiz da `public_html`.

> **Atenção:** Envie os arquivos e pastas que estão **dentro** de `out/` (ou seja: `index.html`, `_next/`, `images/`, `.htaccess`, etc.), e não a pasta `out` inteira. Isso garante que o arquivo `index.html` fique corretamente na raiz do seu site.

### Se usar o cPanel:

1. Compacte todos os arquivos de dentro de `out/` em um único arquivo `.zip`.
2. Faça o upload do arquivo `.zip` para a pasta `public_html`.
3. Clique com o botão direito sobre o arquivo enviado e selecione **Extract** (Extrair).