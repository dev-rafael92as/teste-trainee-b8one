import styled from "styled-components";

export const Container = styled.div`

`

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 88.375rem;
    width: 100%;
    align-items: center;

    .container-logo {
        display: flex;
        height: 32px;
        align-items: center;
        gap: 0.5rem;

        h2 {
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: #FFFFFF;
        }
    }

    .container-menu-header {
        display: flex;
        height: 2rem;
        gap: 1.6875rem;
        align-items: center;
    
        .contanier-avatar-name {
            display: flex;
            align-items: center;
            gap: 1rem;

            p {
                font-weight: 500;
                font-size: 0.875rem;
                line-height: 1.25rem;
                display: flex;
                align-items: center;
                color: #FFFFFF;
            }
        }
    }
`

export const MainContent = styled.div`
    display: flex;
`

export const Sidebar = styled.div`

`

export const MainSection = styled.div`

`