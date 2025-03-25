import { CURSOS } from '../../data/'
import { Badge, Course, Grid, Small, Title } from '../../components'

export function Courses() {
    return (
        <>
            <Title style={{ marginTop: '5rem' }}>
                All courses
                <Badge emoji='🎉' text='5 Courses' />
                <Badge emoji='🎉' text='1 Resource' />
            </Title>

            <Small>
                Here you can find the complete list of courses with their links to Google Drive and Microsoft SharePoint.
            </Small>

            <Grid style={{ marginTop: '3rem' }}>
                {CURSOS.map((curso, index) => {
                    const authors = CURSOS[index].author ? CURSOS[index].author.split('\n') : [];
                    const hrefs = CURSOS[index].hrefL ? CURSOS[index].hrefL.split('\n') : [];

                    return (
                        <Course
                            key={index}
                            title={`${CURSOS[index].tecnologia} Course`}
                            subtitle={`${CURSOS[index].nClases} classes`}
                            href={`../course/${CURSOS[index].id}`}
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