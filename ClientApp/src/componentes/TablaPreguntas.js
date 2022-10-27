import { Table } from "reactstrap"

const TablaPreguntas = ({ data }) => {
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Pregunta</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="3">Sin Registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.txtPregunta}</td>
                                </tr>
                                
                                ))
                    )
                }
            </tbody>
        </Table>
        )
}

export default TablaPreguntas;