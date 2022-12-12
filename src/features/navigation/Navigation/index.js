import { StyledNavigation, StyledNavLink } from "./styled";

const Navigation = () => (
    <nav>
        <StyledNavigation>
            <li>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </li>
        </StyledNavigation>
    </nav>

);

export default Navigation;
