<div>
	<form method="POST" action="administra.php">
		<input type="hidden" name="operacao" value="incluir" />
		<div>
			<label>Título</label>
			<input type="text" name="titulo">
		</div>
		<div>
			<label>Categoria</label>
			<input type="text" name="categoria">
		</div>
		<div>
			<label >Descrição</label>
			<textarea name="descricao" id="" cols="30" rows="10"></textarea>
		</div>
		<input type="submit" value="Incluir">
	</form>

</div>
