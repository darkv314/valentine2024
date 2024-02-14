import { createFileRoute } from "@tanstack/react-router";
import MenuItem from "../components/MenuItem";
import us1 from '../assets/images/menu/us1.jpeg'
import us2 from '../assets/images/menu/us2.jpeg'
import valentine from '../assets/images/menu/valentine.jpeg'
import uwu from '../assets/images/menu/uwu.jpeg'

const Menu = () => {
    return (
        <div className="grid gap-16 grid-rows-2 sm:grid-cols-2 grid-cols-1 p-8">
            <MenuItem
                image={us1}
                title="Us 💜"
                to="/us"
            />
            <MenuItem
                image={uwu}
                title="Valentine 💜"
                to="/valentine"
            />
            <MenuItem
                image={valentine}
                title="The other valentine 🫦"
                to="https://drive.google.com/drive/folders/1RMXGa4lSZ3Ii2d8WZsmtPSQXcCzT1WXI"
            />
            <MenuItem
                image={us2}
                title="Cancun 🏖️"
                to='/cancun'
            />
        </div>
    )
}

export const Route = createFileRoute('/menu')({
    component: Menu
})