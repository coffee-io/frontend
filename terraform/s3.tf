resource "aws_s3_bucket" "frontend" {
    bucket      = "coffee-prod"
    acl         = "public-read"
    policy      = "${file("policy.json")}"

    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    force_destroy = true
}

# vim:ts=4:sw=4:sts=4:expandtab:syntax=conf
