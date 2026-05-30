import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../../../services/auth-service";

function RegisterForm() {
  // TODO Iteration 1:
  // 1. Inicializa react-hook-form:
  //      const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({ mode: 'all' });
  // 2. Obten navigate con useNavigate().
  // 3. Crea handleRegister(user):
  //      - llama a AuthService.register(user) (POST /users)
  //      - en exito: navigate('/login')
  //      - en error 400: recorre error.response.data.errors y llama a
  //        setError(inputName, { type: 'custom', message: ... }) para cada campo
  // 4. Renderiza un <form onSubmit={handleSubmit(handleRegister)}> con inputs:
  //      name (required), email (type email, required),
  //      username (required), password (type password, required)
  //    Usa los input-group de bootstrap con iconos fa-* y muestra errors.<campo>.message
  //    en un <div className="invalid-feedback">. Boton submit deshabilitado si !isValid.

  return (
    <form>
      {/* TODO: construye el formulario de registro aqui */}
      <p className="text-muted">TODO: Register form (Iteration 1)</p>
    </form>
  );
}

export default RegisterForm;
