import { CURSOS } from '../../data/'
import { Badge, Course, Grid, Small, Title } from '../../components'


export function Courses() {
    return (
        <>
            <Title style={{ marginTop: '5rem' }}>
                Todos los cursos
                <Badge emoji='🎉' text='5 Cursos'/>
                <Badge emoji='🎉' text='1 Recurso'/>
            </Title>

            <Small>
                Aquí puedes encontrar el listado de los cursos completos con sus enlaces a Google Drive
            </Small>

            <Grid style={{ marginTop: '3rem' }}>
                <Course
                    title={`Curso de ${CURSOS[0].tecnologia}`}
                    subtitle={`${CURSOS[0].nClases} clases`}
                    href={`../curso/${CURSOS[0].id}`}
                    image={`${CURSOS[0].logo}`}
                    alt={`${CURSOS[0].tecnologia}`}
                    author={CURSOS[0].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                />
                <Course
                    title={`Curso de ${CURSOS[2].tecnologia}`}
                    subtitle={`${CURSOS[2].nClases} clases`}
                    href={`../curso/${CURSOS[2].id}`}
                    image={`${CURSOS[2].logo}`}
                    alt={`${CURSOS[2].tecnologia}`}
                    author={CURSOS[2].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                />
                <Course
                    title={`Curso de ${CURSOS[1].tecnologia}`}
                    subtitle={`${CURSOS[1].nClases} clases`}
                    href={`../curso/${CURSOS[1].id}`}
                    image={`${CURSOS[1].logo}`}
                    alt={`${CURSOS[1].tecnologia}`}
                    author={CURSOS[1].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                />
                <Course
                    title={`Curso de ${CURSOS[3].tecnologia}`}
                    subtitle={`${CURSOS[3].nClases} clases`}
                    href={`../curso/${CURSOS[3].id}`}
                    image={`${CURSOS[3].logo}`}
                    alt={`${CURSOS[3].tecnologia}`}
                    author={CURSOS[3].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                />
                <Course
                    title={`Curso de ${CURSOS[4].tecnologia}`}
                    subtitle={`${CURSOS[4].nClases} clases`}
                    href={`../curso/${CURSOS[4].id}`}
                    image={`${CURSOS[4].logo}`}
                    alt={`${CURSOS[4].tecnologia}`}
                    author={CURSOS[4].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                /> 
                <Course
                    title={`${CURSOS[5].tecnologia}`}
                    subtitle={`${CURSOS[5].nClases} clases`}
                    href={`../curso/${CURSOS[5].id}`}
                    image={`${CURSOS[5].logo}`}
                    alt={`${CURSOS[5].tecnologia}`}
                    author={CURSOS[5].author.split('\n').map((name, index) =>  <p key={index}>{name}</p>)}
                /> 
            </Grid>
        </>
    )
}