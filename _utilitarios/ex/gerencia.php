<article>
	<h2>Incluir</h2>
	<form method="POST" action="administra.php">
		<input type="hidden" name="operacao" value="incluir" />
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
		<input type="submit" value="Salvar">
	</form>

</article>
<div>&nbsp;</div>
<div>&nbsp;</div>
<article>
	<h2>Mostrar</h2>
	<form method="POST" action="administra.php">
		<input type="hidden" name="operacao" value="mostrar" />
		<input type="submit" value="Mostrar" />
	</form>
	
</article>
<div>&nbsp;</div>
<div>&nbsp;</div>
<article>
	<h2>Deletar</h2>
	<form method="POST" action="administra.php">
		<input type="hidden" name="operacao" value="excluir" />
		<input type="text" name="id"/>
		<input type="submit" value="Excluir" />
	</form>
</article>
