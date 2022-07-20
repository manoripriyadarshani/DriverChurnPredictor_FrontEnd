import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

export default function MainNavigation(){
    return (
        <header className={classes.header}>
            <dev className={classes.logo}>Driver Churn Prediction</dev>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> Model Train  </Link>
                    </li>
                    <li>
                        <Link to='/single-predict'> Single Prediction </Link>
                    </li>
                    <li>
                        <Link to='/bulk-predict'> Bulk Prediction  </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}
