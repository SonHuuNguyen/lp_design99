<!DOCTYPE html>
<html>
<head>
	<title>test css</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<style type="text/css">
	#parent {
		display: flex;
		justify-content: space-around;
		flex-direction: column;

	}
	#a{
		background-color: #cba;
		flex-basis: 40%;
		order: 2;
	}
	#b{

		background-color: #abc;
		order: 1;
		flex-basis: 40%;
		display: flex;
	}
	#bb{
		margin: auto;
	}
</style>
<body>
	<div id="parent">
			<div id="a">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
			<div id="b">
				<div id="bb">
					ccccc
				</div>

			</div>
	</div>


</body>
</html>