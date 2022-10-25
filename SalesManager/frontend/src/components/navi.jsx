import { useParams, useNavigate } from "react-router-dom";

export function navi(Component) {
    return (props) => (
     <Component {...props} params={useParams()} navigate={useNavigate()} />
    )
}