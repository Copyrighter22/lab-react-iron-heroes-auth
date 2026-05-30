function LoginForm() {
  // TODO Iteration 3 | Formulario de login
  //
  // Construye un formulario controlado con react-hook-form con dos campos
  // obligatorios: username y password (este ultimo de tipo password).
  //
  // Al enviar el formulario, llama a la funcion login de tu auth-service, que
  // devuelve un objeto con el usuario y un token:
  //   - Guarda el token y el usuario en el localStorage del navegador.
  //   - Redirige al usuario a la pagina del listado de heroes.
  //   - Si la API responde con un error 401, muestra el mensaje de credenciales
  //     incorrectas que llega en la respuesta del servidor.
  //
  // Reutiliza el mismo estilo de Bootstrap y Font Awesome que en el registro.

  return (
    <p className="text-muted">TODO: formulario de login (Iteration 3)</p>
  );
}

export default LoginForm;
