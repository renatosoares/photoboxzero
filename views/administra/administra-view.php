<?php
	echo "Administração <br /> <hr />";
?>
		<section>
        <article>
            <hr />
            <form enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="hidden" name="MAX_FILE_SIZE" value="<?php echo GW_MAXFILESIZE; ?>" />
                <fieldset>
                    <label>Título</label>
                    <input type="text" name="titulo">
                </fieldset>
                <fieldset>
                    <label>Categoria</label>
                    <input type="text" name="categoria">
                </fieldset>
                <fieldset>
                    <label >Descrição</label>
                    <textarea name="descricao" id="" cols="30" rows="10"></textarea>
                </fieldset>
                <fieldset>
                    <label>Imagem upload</label>
                    <input type="file" name="imagemUpload"/>
                </fieldset>
                <fieldset>
                    <hr />
                    <input type="submit" value="Add" name="submit" />
                </fieldset>
               
            </form>
        </article>
    </section>