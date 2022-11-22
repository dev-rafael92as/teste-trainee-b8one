import { useState } from 'react'
import { Container, Form, Header } from './styles'
import { GET_LOGIN } from '../../graphql/get-user'
import { useMutation } from '@apollo/client'

export function LoginPage() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    console.log(email, password)

    const handleSubmit = () => {
        const [SingIn, { data, loading, error }] = useMutation(GET_LOGIN)

        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;

        return
        
    }

    return ( 
        <Container>
            <Header>
                <div>
                    <h1>Academy <span>Store</span></h1>
                </div>
            </Header>

            <Form>
                <h2 className=''>Olá, entre com e-mail e senha.</h2>

                <div className='container-email'>
                    <label htmlFor="email">Seu e-mail</label>
                    <input 
                        type="email" 
                        placeholder="exemplo@email.com"
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>

                <div className='container-password'>
                    <div className='container-label-passord'>
                        <label htmlFor="password">Senha</label>
                        <a className='forgot-password' href="/">Esqueci minha senha</a>
                    </div>
                    <input 
                        type="password" 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    ></input>
                </div>

                <div className='container-conected'>
                    <input type="checkbox" name="" id="stay-conected" />
                    <p>Manter conectado</p>
                </div>

                <input 
                    className='btn-access' 
                    type="submit" 
                    value="Entrar"
                    onClick={handleSubmit}
                />

                <a className='link-register' href="/">Não possui conta? Cadastre-se!</a>
            </Form>


            
        </Container>
    )
}
