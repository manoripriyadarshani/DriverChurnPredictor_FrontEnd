import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';

export default function Layout(props) {
    return (<dev>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
    </dev>);
}
