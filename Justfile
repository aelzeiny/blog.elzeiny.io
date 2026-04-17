hugo := `which hugo || echo ~/go/bin/hugo`

# Start dev server with drafts
dev:
    {{hugo}} server --buildDrafts --buildFuture

# Build the site
build:
    {{hugo}}

# Create a new post (usage: just post my-post-title)
post title:
    {{hugo}} new content posts/{{title}}.md

# Clean generated output
clean:
    rm -rf public/
