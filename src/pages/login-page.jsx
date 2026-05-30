import { PageLayout } from '../components/layouts';
import { LoginForm } from '../components/auth';

function LoginPage() {
  return (
    <PageLayout
      jumbotron={{
        title: 'Bienvenido de nuevo',
        subtitle: 'Entra para ver tus heroes'
      }}
    >
      <LoginForm />
    </PageLayout>
  );
}

export default LoginPage;
