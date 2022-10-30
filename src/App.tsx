import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

export function App() {
  return (
    <div className="max-w-screen min-h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
      <header className="flex items-center flex-col">
        <Logo />

        <Heading className="mt-4" size="lg">
          ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1" size="lg">
          Fala login e comece a usar
        </Text>
      </header>

      <form className="min-w-[400px] mt-8 flex items-center flex-col gap-4">
        <label className="w-full" htmlFor="email">
          <Text className="mb-3" size="lg">
            Endereço de e-mail
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label className="w-full" htmlFor="passworld">
          <Text className="mb-3" size="lg">
            Sua senha
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="passworld" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="persistir" className="w-full flex items-center gap-3">
          <Checkbox />

          <p>Lembra de mim por 30 dias</p>
        </label>

        <Button className="mt-8" type="submit">
          entrar na plataforma
        </Button>
      </form>

      <footer className="flex items-center flex-col gap-3 mt-8">
        <Text className="text-gray-400 underline" asChild>
          <a href="#">Esqueceu sua senha?</a>
        </Text>

        <Text className="text-gray-400 underline" asChild>
          <a href="#">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
