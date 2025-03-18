import { CURSOS } from '../../data/'
import { Badge, Course, Grid, Small, Title } from '../../components'

export function Courses() {
    return (
        <>
            <Title style={{ marginTop: '5rem' }}>
                Todos los cursos
                <Badge emoji='🎉' text='5 Cursos' />
                <Badge emoji='🎉' text='1 Recurso' />
            </Title>

            <Small>
                Aquí puedes encontrar el listado de los cursos completos con sus enlaces a Google Drive y Microsoft SharePoint
            </Small>

            <Grid style={{ marginTop: '3rem' }}>
                {CURSOS.map((curso, index) => {
                    const authors = CURSOS[index].author ? CURSOS[index].author.split('\n') : [];
                    const hrefs = CURSOS[index].hrefL ? CURSOS[index].hrefL.split('\n') : [];

                    return (
                        <Course
                            key={index}
                            title={`Curso de ${CURSOS[index].tecnologia}`}
                            subtitle={`${CURSOS[index].nClases} clases`}
                            href={`../curso/${CURSOS[index].id}`}
                            image={`assets/${CURSOS[index].logo}`}
                            alt={`${CURSOS[index].tecnologia}`}
                            author={authors.map((name, authorIndex) => (
                                <a 
                                    key={authorIndex} 
                                    href={hrefs[authorIndex]} 
                                    onClick={(e) => e.stopPropagation()} 
                                    rel='nofollow noopener noreferrer' 
                                    target='_blank'>
                                        {name}
                                </a>
                            ))}
                        />
                    );
                })}      
            </Grid>
        </>
    )
}