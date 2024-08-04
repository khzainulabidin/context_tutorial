import HandleTheme from "@/components/HandleTheme";
import ThemeDetails from "@/components/ThemeDetails";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <ThemeDetails/>
            <HandleTheme/>
        </Fragment>
    );
}
