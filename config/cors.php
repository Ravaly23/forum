<?php

return[
    'paths' =>['api/*','sanctum/csrf-cookie'],
    'allowed_method' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => ['*'],
    'allowed_header' => ['*'],
    'exposed_header' => [''],
    'max_age' => 0,
    'support_credentials' => false
];