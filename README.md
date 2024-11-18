# Michael Lisitsa's Personal Website

Explore developer projects that Michael is interested in.

- [x] See a serverless API for printing motivational posters

## Deploy to Cloudfront

This has been bootstrapped using https://github.com/awslabs/cloudfront-hosting-toolkit

1. Install the toolkit

```
npm install -g @aws/cloudfront-hosting-toolkit
```

2. Modify the Config to your hosted zone. The `cloudfront-hosting-toolkit init` command does not have to be run again.

3. Deploy the infrastructure

```
cloudfront-hosting-toolkit deploy
```

### Changes from default hosting-toolkit

- NextJS v15 requires Node >= 18.18.0. Modify in cloudfront-hosting-toolkit-build.yml

- NextJS v15 doesn't support `export` command, updated next.config.ts with output: "export",

- NextJS v15 exporting doesn't support image optimization and fails the build. Updated next.config.ts with `unoptimized: true`
