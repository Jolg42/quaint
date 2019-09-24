(function() {var implementors = {};
implementors["prisma_query"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"prisma_query/ast/enum.ParameterizedValue.html\" title=\"enum prisma_query::ast::ParameterizedValue\">ParameterizedValue</a>&lt;'a&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>",synthetic:false,types:[]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"prisma_query/ast/enum.ParameterizedValue.html\" title=\"enum prisma_query::ast::ParameterizedValue\">ParameterizedValue</a>&lt;'a&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>",synthetic:false,types:[]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"prisma_query/ast/enum.ParameterizedValue.html\" title=\"enum prisma_query::ast::ParameterizedValue\">ParameterizedValue</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>",synthetic:false,types:["alloc::string::String"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"prisma_query/ast/enum.ParameterizedValue.html\" title=\"enum prisma_query::ast::ParameterizedValue\">ParameterizedValue</a>&lt;'a&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>",synthetic:false,types:[]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"prisma_query/ast/enum.ParameterizedValue.html\" title=\"enum prisma_query::ast::ParameterizedValue\">ParameterizedValue</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/datetime/struct.DateTime.html\" title=\"struct chrono::datetime::DateTime\">DateTime</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/offset/utc/struct.Utc.html\" title=\"struct chrono::offset::utc::Utc\">Utc</a>&gt;",synthetic:false,types:["chrono::datetime::DateTime"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/1.7.0/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.MysqlParams.html\" title=\"struct prisma_query::connector::MysqlParams\">MysqlParams</a>",synthetic:false,types:["prisma_query::connector::mysql::MysqlParams"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/1.7.0/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.Mysql.html\" title=\"struct prisma_query::connector::Mysql\">Mysql</a>",synthetic:false,types:["prisma_query::connector::mysql::Mysql"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/1.7.0/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.PostgresParams.html\" title=\"struct prisma_query::connector::PostgresParams\">PostgresParams</a>",synthetic:false,types:["prisma_query::connector::postgres::PostgresParams"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/1.7.0/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.PostgreSql.html\" title=\"struct prisma_query::connector::PostgreSql\">PostgreSql</a>",synthetic:false,types:["prisma_query::connector::postgres::PostgreSql"]},{text:"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.SqliteParams.html\" title=\"struct prisma_query::connector::SqliteParams\">SqliteParams</a>",synthetic:false,types:["prisma_query::connector::sqlite::SqliteParams"]},{text:"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"prisma_query/connector/struct.Sqlite.html\" title=\"struct prisma_query::connector::Sqlite\">Sqlite</a>",synthetic:false,types:["prisma_query::connector::sqlite::Sqlite"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"prisma_query/connector/struct.MysqlParams.html\" title=\"struct prisma_query::connector::MysqlParams\">MysqlParams</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/r2d2/0.8/r2d2/struct.Pool.html\" title=\"struct r2d2::Pool\">Pool</a>&lt;<a class=\"struct\" href=\"prisma_query/pool/struct.PrismaConnectionManager.html\" title=\"struct prisma_query::pool::PrismaConnectionManager\">PrismaConnectionManager</a>&lt;<a class=\"struct\" href=\"prisma_query/pool/mysql/struct.MysqlConnectionManager.html\" title=\"struct prisma_query::pool::mysql::MysqlConnectionManager\">MysqlConnectionManager</a>&gt;&gt;",synthetic:false,types:["r2d2::Pool"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/1.7.0/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"prisma_query/pool/struct.PrismaConnectionManager.html\" title=\"struct prisma_query::pool::PrismaConnectionManager\">PrismaConnectionManager</a>&lt;<a class=\"type\" href=\"prisma_query/pool/postgres/type.PostgresManager.html\" title=\"type prisma_query::pool::postgres::PostgresManager\">PostgresManager</a>&gt;",synthetic:false,types:["prisma_query::pool::PrismaConnectionManager"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"prisma_query/connector/struct.PostgresParams.html\" title=\"struct prisma_query::connector::PostgresParams\">PostgresParams</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/r2d2/0.8/r2d2/struct.Pool.html\" title=\"struct r2d2::Pool\">Pool</a>&lt;<a class=\"struct\" href=\"prisma_query/pool/struct.PrismaConnectionManager.html\" title=\"struct prisma_query::pool::PrismaConnectionManager\">PrismaConnectionManager</a>&lt;<a class=\"type\" href=\"prisma_query/pool/postgres/type.PostgresManager.html\" title=\"type prisma_query::pool::postgres::PostgresManager\">PostgresManager</a>&gt;&gt;",synthetic:false,types:["r2d2::Pool"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"prisma_query/connector/struct.SqliteParams.html\" title=\"struct prisma_query::connector::SqliteParams\">SqliteParams</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/r2d2/0.8/r2d2/struct.Pool.html\" title=\"struct r2d2::Pool\">Pool</a>&lt;<a class=\"struct\" href=\"prisma_query/pool/struct.PrismaConnectionManager.html\" title=\"struct prisma_query::pool::PrismaConnectionManager\">PrismaConnectionManager</a>&lt;<a class=\"struct\" href=\"prisma_query/pool/sqlite/struct.SqliteConnectionManager.html\" title=\"struct prisma_query::pool::sqlite::SqliteConnectionManager\">SqliteConnectionManager</a>&gt;&gt;",synthetic:false,types:["r2d2::Pool"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()