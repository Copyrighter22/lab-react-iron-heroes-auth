function RegisterForm() {
  // TODO Iteration 2 | Formulario de registro
  //
  // Construye un formulario controlado con react-hook-form que permita registrar
  // un usuario. Debe tener cuatro campos obligatorios: nombre, email, username y
  // password (este ultimo como campo de tipo password).
  //
  // Al enviar el formulario, llama a la funcion register de tu auth-service:
  //   - Si el registro funciona, redirige al usuario a la pagina de login.
  //   - Si la API responde con un error 400, muestra junto a cada campo el mensaje
  //     de error que llega en la respuesta del servidor.
  //
  // Maqueta el formulario con Bootstrap (input-group e iconos de Font Awesome) y
  // deshabilita el boton de enviar mientras el formulario no sea valido.

  return (
    <p className="text-muted">TODO: formulario de registro (Iteration 2)</p>
  );
}

export default RegisterForm;
