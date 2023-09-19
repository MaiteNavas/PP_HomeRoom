
import { useAuth } from '../../contexts/AuthContext';

export const HomeAdmin = () => {
    const { user } = useAuth();
    return (
        
            <div className="row justify-content-center">
                
                <h1>PAGINA HOME DE ADMIN</h1>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
    );
};

