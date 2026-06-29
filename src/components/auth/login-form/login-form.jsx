import { useForm } from "react-hook-form";
import * as AuthService from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";

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

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const reply = await AuthService.login(data);
      localStorage.setItem("session", JSON.stringify(reply))
      navigate("/heroes");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("username", { message: error.response.data.errors.username });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*USER*/}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
          <input
            className="form-control"
            type="text"
            {...register("username", {
              required: true,
            })}
            placeholder="Username"
          />
        </div>
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}
        {/*PASSWORD*/}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-lock fa-fw"></i>
          </span>
          <input
            className="form-control"
            type="password"
            {...register("password", {
              required: true,
            })}
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          {/*SUBMIT BUTTON*/}
          Iniciar session
        </button>
      </form>
    </>
  );
}

export default LoginForm;
