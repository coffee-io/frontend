locals {
  s3_origin_id = "myS3Origin"
}

data "aws_acm_certificate" "cert" {
    domain   = "*.gamesmith.co.uk"
    statuses = ["ISSUED"]
}

resource "aws_cloudfront_distribution" "frontend_cf" {
    origin {
        #domain_name         = "coffee-prod.s3.amazonaws.com"
        domain_name         = "coffee-prod.s3-website-us-east-1.amazonaws.com"
        origin_id           = "coffee-prod-s3"
        custom_origin_config {
            origin_protocol_policy = "http-only"
            http_port              = "80"
            https_port             = "443"
            origin_ssl_protocols   = ["TLSv1.2"]
        }
    }

    enabled                 = true
    is_ipv6_enabled         = true
    default_root_object     = "index.html"

    aliases = ["coffee.gamesmith.co.uk"]

    default_cache_behavior {
        allowed_methods     = ["GET", "HEAD", "OPTIONS"]
        cached_methods      = ["GET", "HEAD", "OPTIONS"]
        target_origin_id    = "coffee-prod-s3"

        forwarded_values {
            query_string    = false

            cookies {
                forward     = "none"
            }
        }

        viewer_protocol_policy = "allow-all"
        min_ttl                = 0
        default_ttl            = 86400
        max_ttl                = 31636000

        compress               = true
        viewer_protocol_policy = "redirect-to-https"
    }

    price_class                 = "PriceClass_200"

    restrictions {
        geo_restriction {
            restriction_type    = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn     = "${data.aws_acm_certificate.cert.arn}"
        ssl_support_method      = "sni-only"
    }

}

# vim:ts=4:sw=4:sts=4:expandtab:syntax=conf
