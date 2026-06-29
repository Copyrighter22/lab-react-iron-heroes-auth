import { useForm } from "react-hook-form";
import * as AuthService from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";

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

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await AuthService.register(data);
      navigate("/login");
    } catch (error) {
      if (error.response?.status === 400) {
        Object.keys(error.response.data.errors).forEach((field) => {
          setError(field, { message: error.response.data.errors[field] });
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          {/*NAME*/}
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
          <input
            className="form-control"
            type="text"
            {...register("name", {
              required: "Se requiere un Nombre",
            })}
            placeholder="First name"
          />
        </div>
        <div>
          {/*EMAIL*/}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-envelope fa-fw"></i>
            </span>
            <input
              className="form-control"
              type="email"
              noValidate
              {...register("email", {
                required: "Es necesario un email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "El formato del correo no es válido (ejemplo@mail.com)",
                },
              })}
              placeholder="ejemplo@mail.com"
            />
          </div>
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div>
          {/*USERNAME*/}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-user fa-fw"></i>
            </span>
            <input
              className="form-control"
              type="text"
              {...register("username", {
                required: "Se necesita un nombre de usuario",
              })}
              placeholder="Username"
            />
          </div>
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="input-group mb-3">
          {/*PASSWORD*/}
          <span className="input-group-text">
            <i className="fa fa-lock fa-fw"></i>
          </span>
          <input
            className="form-control"
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe contener al menos 6 caracteres",
              },
            })}
            placeholder="Por lo menos 6 caracteres"
          />
        </div>
        <button className="btn btn-primary w-full" type="submit" disabled={!isValid}>
          {/*SUBMIT BUTTON*/}
          Registrarse
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
