<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, TestDirectory>
 */
final class TestDirectoryCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<TestDirectory>
     */
    private readonly array $directories;

    /**
     * @psalm-param list<TestDirectory> $directories
     */
    public static function fromArray(array $directories): self
    {
        return new self(...$directories);
    }

    private function __construct(TestDirectory ...$directories)
    {
        $this->directories = $directories;
    }

    /**
     * @psalm-return list<TestDirectory>
     */
    public function asArray(): array
    {
        return $this->directories;
    }

    public function count(): int
    {
        return count($this->directories);
    }

    public function getIterator(): TestDirectoryCollectionIterator
    {
        return new TestDirectoryCollectionIterator($this);
    }

    public function isEmpty(): bool
    {
        return $this->count() === 0;
    }
}
                                             �w�#�u  �p?�|���wc�u�$I��<�w��[��z�4h��ӂp�;٪�t�ib�>�u>τn�|t�������pv��H��zf|�遂w`I�b�o~{�{���z�G���})P ( ��z��h�8��I$I��y"r�8��}NZ��ݺ�y��\���|$K���$�|��=��g{�{�7ԁx^�2�nz ���J��J��whK���f�z��<��}E��lK��u�ff�r�{� A"I�sYu�m�} �؉mے{���zÀyRQ�C>�۾-�ud���&��"ɐɐ��{����w�9P��y6�C3���\��2�,���O"	~��\��Z,�_  ��,>�ZC��JwV �����y��_��kb������}����5�n��I%Vr�}��h�k�w9�ɐ�|h:����|۶aۜm���;Hgs�wk4M�ڶ�y�J���̀}۲$X�%oJJ����}EZ�%&�v/X�ewn�{m
�h;��|ڇg�";�|I�x8r�|I�~.��}$lc�ș�rR/5 #�}1kw��l-aw9�|2�#��x��[�{���ۈ|6�m�~zn7�6Pg�|�6o�̀{�X�?�'zQs���{�iᘷ�m�J��Jx�2�>�v��:h+�~u�{R�A�yK��=6�{)ѓQ�z��Tc_s�|K�eW'�z� ����}ؼm�ۃ}�'�^��z���"I�{�W�k�~p�3҂& �u`"�$[�s��t$		�tDR��P�|N|�i	�{Aۮcٱ�}N۹F��{L�J��Z�|E��[�!�|��T��{H��n�~���P̍yyNr���~`)Q$���|���߶�rM�v�I�}`J����1d�i׌|  �m�'�p�9���u�m��'�o�7�R�x`��$����>1C1z�#�� �~ݲ֘��~y.��I�}7c���{~yO������vo~zkl��4�}Xצd_�~y"	 �~�c��s��y���۸m�~���h��x��I��1�}?٪���x��	ۖ�}���/�B�y� m$���}o�7���~�`����I�$I��� �����s��F�9�P����'�~�_���w�;Z���xD�$K6~xʙI��~Z �R�>|_��Z�&�`��
9ustX|�'.��}t]p�OtT)�حH�}�S��#�ip!@
�i�4�1�|ܨ��r�p��R)�}u�p��۶�{���ڍ6�z�вv���|7�I�<�vP��Z3��}������}r�d��?��|�(�}r���OJ�|4G9 8|t��i) �~6��~x����& �޲�<�~zv��� �~n��ڴ}I�$i[ �~��9�g؀~ �i۶��HA �A�$I�$�~��!Ìa�I�I�$y6����|l#�+���qW>�T�|��oU	��b��`���|yْ$	��M�-�4�I�$H�	�MѢ�H�$I�$�h��A���I�$H�$�~ Üx�I� I$�s�͞g�~-ڶm��9�{7M��~^�9��!������{X
��l�zd��㫵�|[�����}hmov�z}���*H�}���r�i�z0I����x��S��z�ti���zGs��h��|�m�سl�
�N�q�
:b���tp�����~nN\r��A�w����7�w&`O�{��KJ�{��-'�z�jo��߀z�$1���w��؅�x`��uN֋y�Pw}|�~i�3��&�m`��%Y�~j���% �u)�NE��}k׶�Zl�| ��A��I$H�$�~���;�y �#-�z��R�+�t�#��Զ�~)�$7��~n}N���x���ֶ�s��ݶ�b���� �zPJq���y)�v�ڥu  �m�'�M��9�.��c�Fr���K�W1a�q���l��}-�R#5u~C����xP��#�~s�O��(m�|ܭY�&}s�[I� �}�����a~y��/���{��u�s�~zqҺ� �{jO���~{	����|is���~zH1�v�م}i��h۾�z�ֱk��x4�2Ḿy�Xw�٧�z���Bm�}[�mѶ�{��q�}`�����v�eB;��{���Oۻ�vI�"'��|$X�lC*wِ����~A�4	��w���ZH�|$��E��}�X�q�Ă��$N/�}���c�}$ē��9��b�~�a�Nl�j  '=�t $�Ң-�r.ۖ.�e�P�N�ן|�����ڄu��m�p��y��r����gP�5Z3��~`�����yZ��?NI�xy�zlxS��� �w5�	x[��v	 �yt�ڶ�s^�}ے$ �t��ɔ*hzg���$�	�x7�ֽ�p1w$M��qO-��͍x�f���߁y�m��~h��m۶�qZЀ��~E۶m�z]��>�X�t���h�{��_�S�r�c�nY�|Z#�P�نu1�r$���zH�vmI��~m��kk�x��M! R�~���H\ǂ|/Bd��~�a۞�ـ}ی�l�I$I� <?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, TestDirectory>
 */
final class TestDirectoryCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<TestDirectory>
     */
    private readonly array $directories;
    private int $position = 0;

    public function __construct(TestDirectoryCollection $directories)
    {
        $this->directories = $directories->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->directories);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): TestDirectory
    {
        return $this->directories[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                             �qШ���|E��$O@�wm�v6�xCm�$IH�}B�6@nD���Im�o�ӻ9 tL�`ry�	�u�m�t��|p�ia�v��҃�~w$m��[�x�)j�b��yߔM��I�z�u���~I��M[ �}��P�3�~��ٱm�zܶ�_�~�cض=ۂy��.��n{u���z��yw���|mޜ|%��{�t�dYr� Ib�:��o��p��]��v�������x�Zm�m�{$ǄHBl�}˖löl�w�ɑ�H�	�$A�$��S�ԫ���g�E�,�)�{�ۧmڦ� ɖ��O��ޱy��9��g��I$�2�C��y��{�B�5��$yQ�^��0NwH����}
�n����uN)y�H��w�u��P{c�{�7j����9��9�f0	�|1����|�r)E�(ərx�ڔ=ڂuFm�Fm�}�D�x��}����s`��ɡ�w��m�&gqJx�M��w!K���A�{vo�ۆ}�i�!ۈ{+�r�8�N�d�c�|v{��V���ɓ�Q�r�20/-�~v�؈��f.u)�{l	�(%>�}����ж�|O޶EY��z�`w��1�|�Ӷ[��y�:<$ϡy�M�� �yN�-��ƅz���-�	�l�p�p�u��Z�5�|�O�h���t�$H����zu۶mԀz��m����z��1��{��u��a�zy�˜�{���$I��zt��?�|m{v��{�Buմ�z<G�-H�}�S�m�z{s�dv̄y���$	��{$�m$��{]6(d�q�}��؁~��-0,�~i�i�6�|�\cu�6�|���k���9�_`r�}m 	��}�+��c} �M ��.�zm��}h    �~=�7_�}@S -�~rжZ�>�uuB��4�x1�R.u�y1ْ����?0��5vҦm�?�~�o;��B}t�A�kǅ~o��v��~v"IA���~wl˷a�~zΆe  �~jܢm��~x���]�I����x�4	��ł~�;���~A�$I�$�~s�9��}MҠmZ�}�a׶ݧ�y$�q)h�~}~���x����M�}��?�m��x��)ٔ�}-Z�Rt�A�$I�$�}�mǃ�Ā|X�[��P�$�>~d��P#�{Uk{{�t
{YM�?��mqɒ6H�j)ir� I�|�WeS�z��֘&i��R�R#4�z��&��aP#�R#1�|۶6-�d�d����x�3��6�y��:���t$ ���|=JI)J}M۶(��~I[�-�n�~H��h۶�|L%Ab���~EӶ-Z��M��h�I�$I�$���؎=�}i    �� �$� ~I    �hEѶ~A�$H �~�7l �~ �   �� � @I�$I�$�h�-�~   @ �w�+��ނ~�ܭn����7�t��I��a��ڠ�?�p�&M�$�~��X o�A�$I�$�~3�l�0o�A$I�$��@ �$I�$I�$�~k��h�fI�$I�$�~ l`��!�I�I�$�~�t@[ׁh�&I���|ܶ�7.�I�$��|�@&۰�{�/6 I��y�C�l�{��N�m�z�f7"[{k��k;�x0���xUӿp|K���-ǆx���6�A�k!p'
�m��5�w�����}n �	��t�t��I[�y��m$�?�wb[���:y��zYuښ�y��?$(I�zw+�;��x�vǶ�m�wyA�-y�p��O�y�˱��T�y����C̈́w#��'���{�$	���y��`ɍ�}�6l�gǁy��\�i�~m��(ڶ�{m�ȝ?�z�H�H�zz!���H�z��o�7��}������z�t���}�����z���
I�u�2�>��y�߶9A{yV�4��%�buB��4�c/QN��m1ir��4R�9}oРQ�/?�{���nA}o�0.��v@�]$�~x�(���{4�bv\?�{ϓ$%BR�x�*S�mzo��?���yvɷ�i�{�TJ���zҀX�M�{$#��PJ�z�֪H���|�߲I��|