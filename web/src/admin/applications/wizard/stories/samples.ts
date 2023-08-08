export const dummyCryptoCertsSearch = {
    pagination: {
        next: 0,
        previous: 0,
        count: 1,
        current: 1,
        total_pages: 1,
        start_index: 1,
        end_index: 1,
    },
    results: [
        {
            pk: "63efd1b8-6c39-4f65-8157-9a406cb37447",
            name: "authentik Self-signed Certificate",
            fingerprint_sha256: null,
            fingerprint_sha1: null,
            cert_expiry: null,
            cert_subject: null,
            private_key_available: true,
            private_key_type: null,
            certificate_download_url:
                "/api/v3/crypto/certificatekeypairs/63efd1b8-6c39-4f65-8157-9a406cb37447/view_certificate/?download",
            private_key_download_url:
                "/api/v3/crypto/certificatekeypairs/63efd1b8-6c39-4f65-8157-9a406cb37447/view_private_key/?download",
            managed: null,
        },
    ],
};

export const dummyAuthenticationFlowsSearch = {
    pagination: {
        next: 0,
        previous: 0,
        count: 2,
        current: 1,
        total_pages: 1,
        start_index: 1,
        end_index: 2,
    },
    results: [
        {
            pk: "2594b1a0-f234-4965-8b93-a8631a55bd5c",
            policybindingmodel_ptr_id: "0bc529a6-dcd0-4ba8-8fef-5702348832f9",
            name: "Welcome to authentik!",
            slug: "default-authentication-flow",
            title: "Welcome to authentik!",
            designation: "authentication",
            background: "/static/dist/assets/images/flow_background.jpg",
            stages: [
                "bad9fbce-fb86-4ba4-8124-e7a1d8c147f3",
                "1da1f272-a76e-4112-be95-f02421fca1d4",
                "945cd956-6670-4dfa-ab3a-2a72dd3051a7",
                "0fc1fc5c-b928-4d99-a892-9ae48de089f5",
            ],
            policies: [],
            cache_count: 0,
            policy_engine_mode: "any",
            compatibility_mode: false,
            export_url: "/api/v3/flows/instances/default-authentication-flow/export/",
            layout: "stacked",
            denied_action: "message_continue",
            authentication: "none",
        },
        {
            pk: "3526dbd1-b50e-4553-bada-fbe7b3c2f660",
            policybindingmodel_ptr_id: "cde67954-b78a-4fe9-830e-c2aba07a724a",
            name: "Welcome to authentik!",
            slug: "default-source-authentication",
            title: "Welcome to authentik!",
            designation: "authentication",
            background: "/static/dist/assets/images/flow_background.jpg",
            stages: ["3713b252-cee3-4acb-a02f-083f26459fff"],
            policies: ["f42a4c7f-6586-4b14-9325-a832127ba295"],
            cache_count: 0,
            policy_engine_mode: "any",
            compatibility_mode: false,
            export_url: "/api/v3/flows/instances/default-source-authentication/export/",
            layout: "stacked",
            denied_action: "message_continue",
            authentication: "require_unauthenticated",
        },
    ],
};

export const dummyAuthorizationFlowsSearch = {
    pagination: {
        next: 0,
        previous: 0,
        count: 2,
        current: 1,
        total_pages: 1,
        start_index: 1,
        end_index: 2,
    },
    results: [
        {
            pk: "9e01f011-8b3f-43d6-bedf-c29be5f3a428",
            policybindingmodel_ptr_id: "14179ef8-2726-4027-9e2f-dc99185199bf",
            name: "Authorize Application",
            slug: "default-provider-authorization-explicit-consent",
            title: "Redirecting to %(app)s",
            designation: "authorization",
            background: "/static/dist/assets/images/flow_background.jpg",
            stages: ["ed5f015f-82b9-450f-addf-1e9d21d8dda3"],
            policies: [],
            cache_count: 0,
            policy_engine_mode: "any",
            compatibility_mode: false,
            export_url:
                "/api/v3/flows/instances/default-provider-authorization-explicit-consent/export/",
            layout: "stacked",
            denied_action: "message_continue",
            authentication: "require_authenticated",
        },
        {
            pk: "06f11ee3-cbe3-456d-81df-fae4c0a62951",
            policybindingmodel_ptr_id: "686e6539-8b9f-473e-9f54-e05cc207dd2a",
            name: "Authorize Application",
            slug: "default-provider-authorization-implicit-consent",
            title: "Redirecting to %(app)s",
            designation: "authorization",
            background: "/static/dist/assets/images/flow_background.jpg",
            stages: [],
            policies: [],
            cache_count: 0,
            policy_engine_mode: "any",
            compatibility_mode: false,
            export_url:
                "/api/v3/flows/instances/default-provider-authorization-implicit-consent/export/",
            layout: "stacked",
            denied_action: "message_continue",
            authentication: "require_authenticated",
        },
    ],
};

export const dummyCoreGroupsSearch = {
    pagination: {
        next: 0,
        previous: 0,
        count: 1,
        current: 1,
        total_pages: 1,
        start_index: 1,
        end_index: 1,
    },
    results: [
        {
            pk: "67543d37-0ee2-4a4c-b020-9e735a8b5178",
            num_pk: 13734,
            name: "authentik Admins",
            is_superuser: true,
            parent: null,
            users: [1],
            attributes: {},
            users_obj: [
                {
                    pk: 1,
                    username: "akadmin",
                    name: "authentik Default Admin",
                    is_active: true,
                    last_login: "2023-07-03T16:08:11.196942Z",
                    email: "ken@goauthentik.io",
                    attributes: {
                        settings: {
                            locale: "en",
                        },
                    },
                    uid: "6dedc98b3fdd0f9afdc705e9d577d61127d89f1d91ea2f90f0b9a353615fb8f2",
                },
            ],
        },
    ],
};

export const dummyPropertyMappings = {
    pagination: {
        next: 0,
        previous: 0,
        count: 4,
        current: 1,
        total_pages: 1,
        start_index: 1,
        end_index: 4,
    },
    results: [
        {
            pk: "30d87af7-9d9d-4292-873e-a52145ba4bcb",
            managed: "goauthentik.io/providers/proxy/scope-proxy",
            name: "authentik default OAuth Mapping: Proxy outpost",
            expression:
                '# This mapping is used by the authentik proxy. It passes extra user attributes,\n# which are used for example for the HTTP-Basic Authentication mapping.\nreturn {\n    "ak_proxy": {\n        "user_attributes": request.user.group_attributes(request),\n        "is_superuser": request.user.is_superuser,\n    }\n}',
            component: "ak-property-mapping-scope-form",
            verbose_name: "Scope Mapping",
            verbose_name_plural: "Scope Mappings",
            meta_model_name: "authentik_providers_oauth2.scopemapping",
            scope_name: "ak_proxy",
            description: "authentik Proxy - User information",
        },
        {
            pk: "3e3751ed-a24c-4f47-a051-e2e05b5cd306",
            managed: "goauthentik.io/providers/oauth2/scope-email",
            name: "authentik default OAuth Mapping: OpenID 'email'",
            expression: 'return {\n    "email": request.user.email,\n    "email_verified": True\n}',
            component: "ak-property-mapping-scope-form",
            verbose_name: "Scope Mapping",
            verbose_name_plural: "Scope Mappings",
            meta_model_name: "authentik_providers_oauth2.scopemapping",
            scope_name: "email",
            description: "Email address",
        },
        {
            pk: "81c5e330-d8a0-45cd-9cad-e6a49a9c428f",
            managed: "goauthentik.io/providers/oauth2/scope-openid",
            name: "authentik default OAuth Mapping: OpenID 'openid'",
            expression:
                "# This scope is required by the OpenID-spec, and must as such exist in authentik.\n# The scope by itself does not grant any information\nreturn {}",
            component: "ak-property-mapping-scope-form",
            verbose_name: "Scope Mapping",
            verbose_name_plural: "Scope Mappings",
            meta_model_name: "authentik_providers_oauth2.scopemapping",
            scope_name: "openid",
            description: "",
        },
        {
            pk: "7ad9cd6f-bcc8-425d-b7c2-c7c4592a1b36",
            managed: "goauthentik.io/providers/oauth2/scope-profile",
            name: "authentik default OAuth Mapping: OpenID 'profile'",
            expression:
                'return {\n    # Because authentik only saves the user\'s full name, and has no concept of first and last names,\n    # the full name is used as given name.\n    # You can override this behaviour in custom mappings, i.e. `request.user.name.split(" ")`\n    "name": request.user.name,\n    "given_name": request.user.name,\n    "preferred_username": request.user.username,\n    "nickname": request.user.username,\n    # groups is not part of the official userinfo schema, but is a quasi-standard\n    "groups": [group.name for group in request.user.ak_groups.all()],\n}',
            component: "ak-property-mapping-scope-form",
            verbose_name: "Scope Mapping",
            verbose_name_plural: "Scope Mappings",
            meta_model_name: "authentik_providers_oauth2.scopemapping",
            scope_name: "profile",
            description: "General Profile Information",
        },
    ],
};

export const dummyHasJwks = {
    pagination: {
        next: 0,
        previous: 0,
        count: 0,
        current: 1,
        total_pages: 1,
        start_index: 0,
        end_index: 0,
    },
    results: [],
};

export const dummySAMLProviderMappings = {
    "pagination": {
        "next": 0,
        "previous": 0,
        "count": 7,
        "current": 1,
        "total_pages": 1,
        "start_index": 1,
        "end_index": 7
    },
    "results": [
        {
            "pk": "9f1f23b7-1956-4daa-b08b-338cab9b3953",
            "managed": "goauthentik.io/providers/saml/uid",
            "name": "authentik default SAML Mapping: User ID",
            "expression": "return request.user.pk",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.goauthentik.io/2021/02/saml/uid",
            "friendly_name": null
        },
        {
            "pk": "801b6328-bb0b-4ec6-b52c-f3dc7bb6ec7f",
            "managed": "goauthentik.io/providers/saml/username",
            "name": "authentik default SAML Mapping: Username",
            "expression": "return request.user.username",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.goauthentik.io/2021/02/saml/username",
            "friendly_name": null
        },
        {
            "pk": "27c4d370-658d-4acf-9f61-cfa6dd020b11",
            "managed": "goauthentik.io/providers/saml/ms-windowsaccountname",
            "name": "authentik default SAML Mapping: WindowsAccountname (Username)",
            "expression": "return request.user.username",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname",
            "friendly_name": null
        },
        {
            "pk": "757b185b-1c21-42b4-a2ee-04d6f7b655b3",
            "managed": "goauthentik.io/providers/saml/groups",
            "name": "authentik default SAML Mapping: Groups",
            "expression": "for group in request.user.ak_groups.all():\n    yield group.name",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.xmlsoap.org/claims/Group",
            "friendly_name": null
        },
        {
            "pk": "de67cee7-7c56-4c1d-9466-9ad0e0105092",
            "managed": "goauthentik.io/providers/saml/email",
            "name": "authentik default SAML Mapping: Email",
            "expression": "return request.user.email",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
            "friendly_name": null
        },
        {
            "pk": "42a936a5-11a9-4442-8748-ec27a8ab9546",
            "managed": "goauthentik.io/providers/saml/name",
            "name": "authentik default SAML Mapping: Name",
            "expression": "return request.user.name",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
            "friendly_name": null
        },
        {
            "pk": "06bee8f0-e5b4-4ce8-959a-308ba0769917",
            "managed": "goauthentik.io/providers/saml/upn",
            "name": "authentik default SAML Mapping: UPN",
            "expression": "return request.user.attributes.get('upn', request.user.email)",
            "component": "ak-property-mapping-saml-form",
            "verbose_name": "SAML Property Mapping",
            "verbose_name_plural": "SAML Property Mappings",
            "meta_model_name": "authentik_providers_saml.samlpropertymapping",
            "saml_name": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn",
            "friendly_name": null
        }
    ]
}

// prettier-ignore
export const dummyProviderTypesList = [
    ["LDAP Provider", "ldapprovider", 
     "Allow applications to authenticate against authentik's users using LDAP.", 
    ], 
    ["OAuth2/OpenID Provider", "oauth2provider", 
     "OAuth2 Provider for generic OAuth and OpenID Connect Applications.", 
    ], 
    ["Proxy Provider", "proxyprovider", 
     "Protect applications that don't support any of the other\n    Protocols by using a Reverse-Proxy.", 
    ], 
    ["Radius Provider", "radiusprovider", 
     "Allow applications to authenticate against authentik's users using Radius.", 
    ], 
    ["SAML Provider", "samlprovider", 
     "SAML 2.0 Endpoint for applications which support SAML.", 
    ], 
    ["SCIM Provider", "scimprovider", 
     "SCIM 2.0 provider to create users and groups in external applications", 
    ], 
    ["SAML Provider from Metadata", "", 
     "Create a SAML Provider by importing its Metadata.", 
    ], 
].map(([name, model_name, description]) => ({ name, description, model_name }));
