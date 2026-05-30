import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../../../services/auth-service";

function LoginForm() {
  // TODO Iteration 2:
  // 1. Inicializa react-hook-form (mode: 'all').
  // 2. const navigate = useNavigate();
  // 3. Crea handleLogin(credentials):
  //      - llama a AuthService.login(credentials) (POST /login) -> { user, token }
  //      - guarda el token y el user en localStorage:
  //          localStorage.setItem('token', token);
  //          localStorage.setItem('user', JSON.stringify(user));
  //      - navigate('/heroes')
  //      - en error 401: usa setError('username', { type:'custom', message: ... })
  //        con el mensaje de error.response.data.errors
  // 4. Renderiza inputs username (required) y password (type password, required)
  //    con el mismo estilo bootstrap/font-awesome del RegisterForm.

  return (
    <form>
      {/* TODO: construye el formulario de login aqui */}
      <p className="text-muted">TODO: Login form (Iteration 2)</p>
    </form>
  );
}

export default LoginForm;
