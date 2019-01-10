var fs = require('fs')
var Student = require('./student')
var express = require('express')
var router = express.Router()
/*
 * 渲染学生列表页面
 */
router.get('/students', function (req, res) {
    Student.find(function (err, Student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            students: Student
        })
    })
})
router.use('/node_modules/', express.static('./node_modules/'))
router.use('/public/', express.static('./public/'))
/*
 * 渲染添加学生页面
 */
router.get('/students/new', function (req, res) {
    res.render('new.html')
})
/*
 * 处理添加学生
 */
router.post('/students/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    var s=new Student(req.body)
    s.save(function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
/*
 * 渲染编辑学生页面
 */
router.get('/students/edit', function (req, res) {
    // 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
    // 2. 获取要编辑的学生 id
    //
    // 3. 渲染编辑页面
    //    根据 id 把学生信息查出来
    //    使用模板引擎渲染页面
    Student.findById(req.query.id, function (err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
/*
 * 处理编辑学生
 */
router.post('/students/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    Student.findByIdAndUpdate(req.body.id,req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
/*
 * 处理删除学生
 */
router.get('/students/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据

    Student.findByIdAndRemove(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

// 3. 把 router 导出
module.exports = router
