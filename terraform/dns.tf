data "aws_route53_zone" "primary" {
    name                = "gamesmith.co.uk"
    private_zone        = false
}

// IPv4
resource "aws_route53_record" "ipv4" {
    zone_id         = "${data.aws_route53_zone.primary.zone_id}"
    name            = "coffee.gamesmith.co.uk"
    type            = "A"
    alias {
        name        = "${aws_cloudfront_distribution.frontend_cf.domain_name}"
        zone_id     = "${aws_cloudfront_distribution.frontend_cf.hosted_zone_id}"
        evaluate_target_health = true
    }
}

// IPv6
resource "aws_route53_record" "ipv6" {
    zone_id         = "${data.aws_route53_zone.primary.zone_id}"
    name            = "coffee.gamesmith.co.uk"
    type            = "AAAA"
    alias {
        name        = "${aws_cloudfront_distribution.frontend_cf.domain_name}"
        zone_id     = "${aws_cloudfront_distribution.frontend_cf.hosted_zone_id}"
        evaluate_target_health = true
    }
} 

# vim:ts=4:sw=4:sts=4:expandtab:syntax=conf
