window.addEventListener("DOMContentLoaded", elMenu);
window.addEventListener("DOMContentLoaded", anclas);

function anclas()
{
	// Deshabilitar las funciones por defectos de los enlaces, sólo para desarrollo
	const anclas = document.querySelectorAll(".boton-deshabilitado");
	anclas.forEach(element => {
		element.addEventListener("click", (ev) => ev.preventDefault());
	});
}

// Funcionalidad al botón del menú
function elMenu(ev)
{
	const botonMenu = document.querySelector("#botonMenu");
	const listadoMenu = document.querySelector("#headerNav");
	listadoMenu.classList.add("cerrado");

	botonMenu.addEventListener("click", (ev) => {
		{
			ev.preventDefault();

			if( listadoMenu.classList.contains("abierto") )
			{
				listadoMenu.classList.remove("abierto");
				listadoMenu.classList.add("cerrado");
			}
			
			else if( listadoMenu.classList.contains("cerrado") )
			{
				listadoMenu.classList.add("abierto");
				listadoMenu.classList.remove("cerrado");
			}

			else
			{
				listadoMenu.classList.add("abierto");
				listadoMenu.classList.remove("cerrado");
			}
		}
	});
}