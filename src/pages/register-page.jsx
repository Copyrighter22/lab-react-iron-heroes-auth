import { PageLayout } from '../components/layouts';
import { RegisterForm } from '../components/auth';

function RegisterPage() {
  return (
    <PageLayout
      jumbotron={{
        title: 'Unete a Iron Heroes',
        subtitle: 'Crea tu cuenta para acceder al catalogo'
      }}
    >
      <RegisterForm />
    </PageLayout>
  );
}

export default RegisterPage;
