import './userSelector.css';
import Link from 'next/link';


export default function UserSelection() {
    return (
        <div className="users-container h-screen flex items-center justify-center">
            <div className="users-selector grid grid-cols-3 gap-10 absolute">
                <Link className="users-user flex items-end justify-center" href='http://localhost:3000/comercios/users'>
                    <div className='users-user-info flex items-center justify-center'>
                        <h1 className='users-info-text'>User</h1>
                        <div className='border-line absolute'></div>
                    </div>
                </Link>

                <Link className="users-commerce flex items-end justify-center" href='http://localhost:3000/comercios/commerce'>
                    <div className='users-commerce-info flex items-center justify-center'>
                        <h1 className='users-info-text'>Commerce</h1>
                        <div className='border-line absolute'></div>
                    </div>
                </Link>

                <Link className="users-admin flex items-end justify-center" href='http://localhost:3000/comercios/admin'>
                    <div className='users-admin-info flex items-center justify-center'>
                        <h1 className='users-info-text'>Admin</h1>
                        <div className='border-line absolute'></div>
                    </div>
                </Link>
            </div>
        </div>
    );
}