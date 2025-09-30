export default function Blog ({ params }: {params: {id: string}}) {
    return (
        <>
            Blog {params.id}
        </>
    )
}