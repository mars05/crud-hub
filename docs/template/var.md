# 模板变量

在处理文件模板时，不同的文件模板类型对模板变量的处理是不一样的。普通模板只会生成一次文件，而代码模板会根据表的数量循环生成，所有代码模板的路径应该包含表相关的模板变量，不然会被覆盖。

在生成代码模板文件时，多个表的话，会循环生成，每次循环会把当前表放入环境中。

## 模板变量列表: 

| 变量名 | 支持的项目类型 | 支持的文件模板 | 说明 |
| ----- | ------------- | ------------ | ----- |
| projectName | All | 普通 | 项目名称 |
| basePackage | All | 普通、代码 | 基础包 |
| basePackageDir | All | 普通、代码 | 基础包路径，如基础包为: com.mars05.test，则基础包路径为: com/mars05/test |
| maven.groupId | Maven | 普通 | Maven参数 |
| maven.artifactId | Maven | 普通 | Maven参数 |
| maven.version | Maven | 普通 | Maven参数 |
| dataSource.databaseType | All | 普通 | 数据库类型 mysql:MySQL,pgsql:PostgreSQL,oracle:Oracle,sqlserver:SQL Server |
| dataSource.host | All | 普通 | 主机 |
| dataSource.port | All | 普通 | 端口 |
| dataSource.username | All | 普通 | 用户名 |
| dataSource.password | All | 普通 | 密码 |
| dataSource.database | All | 普通 | 数据库 |
| dataSource.schema | All | 普通 | 模式，PostgreSQL有效 |
| --- |  |  |  |
| table.tableName | All | 代码 | 表名 |
| table.lowerCamelName | All | 代码 | 小写开头的驼峰表名 |
| table.upperCamelName | All | 代码 | 大写开头的驼峰表名 |
| table.remarks | All | 代码 | 表备注 |
| table.columns | All | 代码 | 表字段集合 |

## 表字段属性: 

columnName: 列名

lowerCamelName: 小写开头的驼峰列名

upperCamelName: 大写开头的驼峰列名

remarks: 列备注

type: 列类型（Integer），参考: java.sql.Types

javaTypeClass: 列类型对应java类型的class

primaryKey: 是否主键（Boolean）

## 列类型对应的Java类型: 

| JDBCType | Java类型 |
| -------- | ------- |
| VARCHAR | String        |
| LONGVARCHAR | String        |
| CHAR | String        |
| INTEGER | Integer        |
| BIGINT | Long        |
| SMALLINT | Integer        |
| TINYINT | Integer        |
| FLOAT | Float        |
| DOUBLE | Double        |
| DECIMAL | BigDecimal        |
| BOOLEAN | Boolean        |
| DATE | Date        |
| TIME | Date        |
| TIMESTAMP | Date        |
| BIT | boolean        |
