import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    background-color: #DDDDDD;
    height: 100vh;
`

export const Form = styled.form`
   max-width: 26rem;
   width: 100%;
   margin: 4rem auto 0;
   height: 34.25rem;
   background-color: #fff;
   padding: 2.5rem 2rem;

   h2 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #000000;
   }

   .container-email,
   .container-password {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
   }

   label {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 0.5rem;
   }

   input {
    padding: 12px 16px;
    background: #FFFFFF;
    border: 1px solid #87848F;
    border-radius: 5px;
   }

   .container-label-passord {
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
   }

   .forgot-password {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px; 
    color: #2E046D;
   }

   .container-conected {
    display: flex;
   }

   .btn-access {
    width: 100%;
    background: #2E046D;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
    border-radius: 0.3125rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    /* border-bottom:  1px solid #E5E5E5;; */
   }

   .link-register {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #2E046D;
    display: block;
    text-align: center;
    padding-top: 2.75rem;
    border-top: 1px solid #E5E5E5;
   }
`

export const Header = styled.div`
    height: 4.25rem;
    text-align: center;
    background-color: #17092C;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        color: #FFFFFF;
        font-family: 'Inter';

        span {
            color: #52B45B;
        }
    }
`

export const Background = styled.div`
   
`