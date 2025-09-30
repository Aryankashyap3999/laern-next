export default function BlogComponent ({ params }: {params: {id: string}}) {
    return (
        <>
            Blog {params.id} comments
        </>
    )
}